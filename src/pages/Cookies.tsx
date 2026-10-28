import { Link } from 'react-router-dom'
import { LegalItem, LegalList, LegalPage, LegalSection } from '../components/legal/LegalPage'
import { CONTACT_EMAIL } from '../data/contact'
import { openCookieSettings } from '../analytics/gtag'

// DRAFT - owner to review before merge. Matches src/analytics/gtag.ts:
// GA4 (G-HZTT9HYTJC) loads only after Accept; the choice lives in localStorage.

const cellClass = 'border border-gold-400/15 px-4 py-3 align-top text-sm'

const cookies = [
  { name: '_ga', provider: 'Google Analytics', purpose: 'Tells visitors apart so we can count them.', duration: '2 years' },
  { name: '_ga_HZTT9HYTJC', provider: 'Google Analytics', purpose: 'Keeps track of your current visit (session).', duration: '2 years' },
]

export default function Cookies(): React.JSX.Element {
  return (
    <LegalPage label="Your Choices" title="Cookie Policy" updated="28 October 2026">
      <LegalSection heading="What cookies are">
        <p>
          Cookies are small text files a website stores in your browser. We keep their use to a minimum: the site
          works fully without any of them.
        </p>
      </LegalSection>

      <LegalSection heading="Analytics cookies (only if you accept)">
        <p>
          We use Google Analytics to understand which pages are useful and how visitors find us. Google Analytics is
          not loaded at all until you click Accept in the cookie banner. If you click Reject, no analytics cookies
          are set and nothing is sent to Google Analytics. We never use advertising cookies.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-gold-400 text-xs uppercase tracking-widest">
                <th className={cellClass}>Cookie</th>
                <th className={cellClass}>Provider</th>
                <th className={cellClass}>Purpose</th>
                <th className={cellClass}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.name}>
                  <td className={`${cellClass} font-mono text-gold-100`}>{c.name}</td>
                  <td className={cellClass}>{c.provider}</td>
                  <td className={cellClass}>{c.purpose}</td>
                  <td className={cellClass}>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LegalSection>

      <LegalSection heading="Strictly necessary storage">
        <p>
          We remember your cookie choice in your browser&apos;s local storage (key <code>e4-cookie-consent</code>) so
          we do not ask again on every page. This is needed to respect your choice and does not track you.
        </p>
      </LegalSection>

      <LegalSection heading="Other services">
        <LegalList>
            <LegalItem>Our web fonts are loaded from Google Fonts. This does not set cookies, but your browser sends your IP address to Google to download them.</LegalItem>
            <LegalItem>Our host, Netlify, receives standard request data (such as your IP address) to deliver the site.</LegalItem>
          </LegalList>
      </LegalSection>

      <LegalSection heading="Changing your mind">
        <p>
          You can change your choice at any time with{' '}
          <button type="button" onClick={openCookieSettings} className="text-gold-400 hover:underline">
            Cookie settings
          </button>{' '}
          (also at the bottom of every page). Withdrawing consent stops analytics and removes the Google Analytics
          cookies. You can also delete cookies in your browser settings.
        </p>
        <p>
          Questions? Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-400 hover:underline">{CONTACT_EMAIL}</a> or read
          our <Link to="/privacy" className="text-gold-400 hover:underline">Privacy Policy</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  )
}
