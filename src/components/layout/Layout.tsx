import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import RouteHead from '../../seo/RouteHead'
import PageViewTracker from '../../analytics/PageViewTracker'
import CookieBanner from '../../analytics/CookieBanner'
import { useEffect } from 'react'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      <RouteHead />
      <PageViewTracker />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
