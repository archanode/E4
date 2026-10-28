// Google Analytics 4 with Google Consent Mode v2 (basic implementation).
//
// - Consent defaults (all denied) are queued before anything else.
// - gtag.js is only downloaded after the visitor clicks Accept, so nothing is
//   sent to Google (not even cookieless pings) before consent.
// - Ads signals always stay denied; Accept grants analytics_storage only.
// - Disabled on localhost.

const MEASUREMENT_ID = 'G-HZTT9HYTJC'
const CONSENT_KEY = 'e4-cookie-consent'
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]', '::1']

export type ConsentChoice = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let initialized = false
let scriptLoaded = false
let bannerForcedOpen = false
const listeners = new Set<() => void>()

function isEnabled(): boolean {
  const host = window.location.hostname
  return !LOCAL_HOSTS.includes(host) && !host.endsWith('.localhost')
}

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null // storage blocked: treat as "not decided yet"
  }
}

function storeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
}

function grantAndLoad(): void {
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
  if (scriptLoaded) return
  scriptLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)
  window.gtag('js', new Date())
  // Page views are sent manually on every route change (see trackPageView).
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false, allow_google_signals: false })
}

/** Removes GA cookies (_ga, _ga_<id>) after consent is withdrawn. */
function deleteGaCookies(): void {
  const host = window.location.hostname
  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (!name.startsWith('_ga')) return
    document.cookie = `${name}=; ${expired}`
    document.cookie = `${name}=; ${expired}; domain=${host}`
    document.cookie = `${name}=; ${expired}; domain=.${host.replace(/^www\./, '')}`
  })
}

function isTracking(): boolean {
  return initialized && scriptLoaded && getStoredConsent() === 'granted'
}

/** Call once before React renders. Sets denied defaults before any tag can fire. */
export function initAnalytics(): void {
  if (initialized || !isEnabled()) return
  initialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // gtag.js requires the Arguments object itself, not an array copy.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  if (getStoredConsent() === 'granted') grantAndLoad()
}

export function trackPageView(): void {
  if (!isTracking()) return
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title,
  })
}

/** Custom events. Never pass personal data in params. */
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (!isTracking()) return
  window.gtag('event', name, params)
}

// ---- Consent state for the cookie banner (useSyncExternalStore) ----

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function isBannerOpen(): boolean {
  return bannerForcedOpen || getStoredConsent() === null
}

/** "Cookie settings" link in the footer. */
export function openCookieSettings(): void {
  bannerForcedOpen = true
  listeners.forEach((l) => l())
}

export function setConsent(choice: ConsentChoice): void {
  storeConsent(choice)
  bannerForcedOpen = false
  if (initialized) {
    if (choice === 'granted') {
      grantAndLoad()
      trackPageView() // the current page was not counted before consent
    } else {
      window.gtag('consent', 'update', { analytics_storage: 'denied' })
      deleteGaCookies()
    }
  }
  listeners.forEach((l) => l())
}
