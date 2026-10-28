// Builds the per-route <head> tags. Used by the prerender script (static HTML)
// and by RouteHead on the client (SPA navigation), so both always agree.
import { canonicalUrl, OG_IMAGE_URL, SITE_NAME } from './site'
import type { RouteMeta } from './routes'

/** Every generated tag carries this attribute so the client can swap them. */
export const HEAD_ATTR = 'data-rh'

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/** JSON inside <script> must not contain "</script>" or "<!--". */
function safeJson(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function renderHeadTags(meta: RouteMeta): string {
  const a = HEAD_ATTR
  const url = canonicalUrl(meta.path)
  const tags = [
    `<title ${a}>${escapeText(meta.title)}</title>`,
    `<meta ${a} name="description" content="${escapeAttr(meta.description)}" />`,
  ]
  if (meta.noindex) {
    tags.push(`<meta ${a} name="robots" content="noindex" />`)
  }
  // The 404 page has no URL of its own, so it gets no canonical or og:url.
  if (meta.path !== '/404') {
    tags.push(`<link ${a} rel="canonical" href="${url}" />`)
    tags.push(`<meta ${a} property="og:url" content="${url}" />`)
  }
  tags.push(
    `<meta ${a} property="og:title" content="${escapeAttr(meta.title)}" />`,
    `<meta ${a} property="og:description" content="${escapeAttr(meta.description)}" />`,
    `<meta ${a} property="og:type" content="${meta.ogType}" />`,
    `<meta ${a} property="og:image" content="${OG_IMAGE_URL}" />`,
    `<meta ${a} property="og:site_name" content="${SITE_NAME}" />`,
  )
  for (const data of meta.jsonLd ?? []) {
    tags.push(`<script ${a} type="application/ld+json">${safeJson(data)}</script>`)
  }
  return tags.join('\n    ')
}
