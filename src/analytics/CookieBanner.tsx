import { useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { isBannerOpen, setConsent, subscribeConsent } from './gtag'

// Server snapshot is "closed" so prerendered HTML never contains the banner;
// the client opens it after hydration if no choice is stored.
const closedOnServer = (): boolean => false

export default function CookieBanner(): React.JSX.Element | null {
  const open = useSyncExternalStore(subscribeConsent, isBannerOpen, closedOnServer)
  if (!open) return null

  // Accept and Reject share one class so they have equal size and prominence.
  const buttonClass = 'btn-outline text-xs py-2.5 px-6 justify-center min-w-28'

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60] bg-dark-800 border-t border-gold-400/25 shadow-2xl shadow-black/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm text-gold-100/70 font-body leading-relaxed flex-1">
          We would like to use Google Analytics cookies to understand how visitors use this site. They are only set
          if you accept. Read our{' '}
          <Link to="/cookies" className="text-gold-400 underline hover:text-gold-300">Cookie Policy</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button type="button" onClick={() => setConsent('denied')} className={buttonClass}>
            Reject
          </button>
          <button type="button" onClick={() => setConsent('granted')} className={buttonClass}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
