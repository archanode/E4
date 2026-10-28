import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from './gtag'

/**
 * Sends a GA4 page_view on first load and on every route change.
 * Must render after <RouteHead /> so document.title is already updated
 * (sibling effects run in tree order).
 */
export default function PageViewTracker(): null {
  const { pathname } = useLocation()
  useEffect(() => {
    trackPageView()
  }, [pathname])
  return null
}
