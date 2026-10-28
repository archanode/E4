// Server entry used only at build time by scripts/prerender.mjs.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.tsx'

export { routes, notFoundRoute } from './seo/routes'
export { renderHeadTags } from './seo/headTags'
export { canonicalUrl } from './seo/site'

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
