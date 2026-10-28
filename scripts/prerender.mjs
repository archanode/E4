// Postbuild step: renders every route in src/seo/routes.ts to static HTML.
//
// Input:  dist/index.html (client build template) + dist-ssr/entry-server.js
// Output: dist/index.html, dist/<route>.html, dist/404.html, dist/sitemap.xml
//
// Files are written as <route>.html (not <route>/index.html) because Netlify
// serves about.html at /about and 301-redirects /about/ to /about, which gives
// the no-trailing-slash canonical form the site uses.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const server = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const { render, renderHeadTags, routes, notFoundRoute, canonicalUrl } = server

const template = readFileSync(join(distDir, 'index.html'), 'utf-8')
const HEAD_BLOCK = /<!--app-head-->[\s\S]*?<!--\/app-head-->/

if (!HEAD_BLOCK.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> markers')
}

/** Fail the build on metadata that breaks the SEO rules, instead of shipping it. */
function validate(meta) {
  const len = [...meta.description].length
  if (len < 140 || len > 160) {
    throw new Error(`${meta.path}: meta description is ${len} chars (need 140-160)`)
  }
  if (meta.path !== '/' && !meta.title.endsWith(' | E4 Chess Academy')) {
    throw new Error(`${meta.path}: title must end with " | E4 Chess Academy"`)
  }
}

function outputFile(path) {
  if (path === '/') return join(distDir, 'index.html')
  return join(distDir, `${path.slice(1)}.html`)
}

function renderPage(meta, url) {
  validate(meta)
  const appHtml = render(url)
  const h1Count = (appHtml.match(/<h1[\s>]/g) ?? []).length
  if (h1Count !== 1) throw new Error(`${meta.path}: expected exactly one <h1>, found ${h1Count}`)
  return template.replace(HEAD_BLOCK, renderHeadTags(meta)).replace('<!--app-html-->', appHtml)
}

const seenTitles = new Set()
const seenDescriptions = new Set()
for (const meta of routes) {
  if (seenTitles.has(meta.title)) throw new Error(`Duplicate title: ${meta.title}`)
  if (seenDescriptions.has(meta.description)) throw new Error(`Duplicate description on ${meta.path}`)
  seenTitles.add(meta.title)
  seenDescriptions.add(meta.description)

  const file = outputFile(meta.path)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, renderPage(meta, meta.path))
  console.log(`prerendered ${meta.path} -> ${file.slice(root.length + 1)}`)
}

// Any URL the router does not know renders NotFound; Netlify serves this with status 404.
writeFileSync(join(distDir, '404.html'), renderPage(notFoundRoute, '/this-page-does-not-exist'))
console.log('prerendered 404 -> dist/404.html')

// Sitemap from the same route list: public (indexable) routes only.
const buildDate = new Date().toISOString().slice(0, 10)
const urls = routes
  .filter((r) => r.sitemap && !r.noindex)
  .map((r) => `  <url>\n    <loc>${canonicalUrl(r.path)}</loc>\n    <lastmod>${buildDate}</lastmod>\n  </url>`)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls,
  '</urlset>',
  '',
].join('\n')
writeFileSync(join(distDir, 'sitemap.xml'), sitemap)
console.log(`wrote dist/sitemap.xml (${urls.length} urls)`)

rmSync(ssrDir, { recursive: true, force: true })
