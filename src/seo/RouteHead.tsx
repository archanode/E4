import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findRouteMeta } from './routes'
import { HEAD_ATTR, renderHeadTags } from './headTags'
import { normalizePath } from './site'

/** Replaces the generated head tags; called on every client-side navigation. */
function applyRouteHead(pathname: string): void {
  const meta = findRouteMeta(normalizePath(pathname))
  document.head.querySelectorAll(`[${HEAD_ATTR}]`).forEach((el) => el.remove())
  // insertAdjacentHTML never executes scripts; JSON-LD is data only, so that is fine.
  document.head.insertAdjacentHTML('beforeend', renderHeadTags(meta))
}

export default function RouteHead() {
  const { pathname } = useLocation()
  useEffect(() => {
    applyRouteHead(pathname)
  }, [pathname])
  return null
}
