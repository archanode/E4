import { Link } from 'react-router-dom'
import { LegalItem, LegalList, LegalPage, LegalSection } from '../components/legal/LegalPage'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from '../data/contact'

// DRAFT - owner to review before merge. Written from what the site actually
// does (Netlify hosting, Netlify Forms, Google Fonts, consent-gated Google
// Analytics). Items marked TODO need facts only the owner has.

const mail = (
  <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold-400 hover:underline">
    {CONTACT_EMAIL}
  </a>
)

export default function Privacy(): React.JSX.Element {
  return (
    <LegalPage label="Your Data" title="Privacy Policy" updated="28 October 2026">
      <LegalSection heading="Who we are">
        {/* TODO(owner): add the legal name and postal address of the business, if different. */}
        <p>
          This website is run by E4 Chess Academy, based in Malta. We are responsible for the personal data
          collected through it. You can reach us at {mail} or {CONTACT_PHONE_DISPLAY}.
        </p>
      </LegalSection>

      <LegalSection heading="What we collect and why">
        <LegalList>
            <LegalItem>
              <strong className="text-gold-100">Contact form:</strong> your name, email, phone number (optional),
              subject and message. We use them to answer your enquiry and arrange lessons.
            </LegalItem>
            <LegalItem>
              <strong className="text-gold-100">Enrolment form:</strong> your first and last name, email, phone
              number (optional), chess level, goals, chosen plan and your confirmation that you have read this
              policy. We use them to set up your lessons.
            </LegalItem>
            <LegalItem>
              <strong className="text-gold-100">Newsletter form:</strong> your email address. We use it only to
              send you academy news. You can ask us to remove you at any time.
            </LegalItem>
            <LegalItem>
              <strong className="text-gold-100">Analytics, only if you accept:</strong> how you use the site
              (pages viewed, approximate location, device and browser) through Google Analytics. See our{' '}
              <Link to="/cookies" className="text-gold-400 hover:underline">Cookie Policy</Link>.
            </LegalItem>
            <LegalItem>
              <strong className="text-gold-100">Technical data:</strong> like any website, our host receives your
              IP address and browser details when you load a page, to deliver and protect the site.
            </LegalItem>
          </LegalList>
        <p>If you are enrolling a child, please fill in the forms as their parent or guardian.</p>
      </LegalSection>

      <LegalSection heading="Legal basis">
        <LegalList>
            <LegalItem>Contact and enrolment: to take steps you ask for before and while providing lessons.</LegalItem>
            <LegalItem>Newsletter and analytics: your consent, which you can withdraw at any time.</LegalItem>
            <LegalItem>Hosting and security data: our legitimate interest in running a safe, working website.</LegalItem>
          </LegalList>
      </LegalSection>

      <LegalSection heading="Who processes your data for us">
        <LegalList>
            <LegalItem>
              <strong className="text-gold-100">Netlify, Inc.</strong> (United States) hosts the website and stores
              form submissions (contact, enrolment and newsletter) in our Netlify account.
            </LegalItem>
            <LegalItem>
              <strong className="text-gold-100">Google</strong> provides Google Analytics (only after you accept)
              and the web fonts used on the site. Loading the fonts sends your IP address to Google.
            </LegalItem>
          </LegalList>
        {/* TODO(owner): confirm both providers' data processing terms cover EU transfers (Standard Contractual Clauses). */}
        <p>
          Some of these providers are outside the European Union. Where data leaves the EU, it is protected by the
          safeguards in their data processing terms. We do not sell your data or use it for advertising.
        </p>
      </LegalSection>

      <LegalSection heading="How long we keep it">
        {/* TODO(owner): confirm or replace these retention periods. */}
        <p>
          We keep enquiries and enrolment details only as long as we need them to answer you and provide your
          lessons, and newsletter addresses until you unsubscribe. Google Analytics data is kept according to the
          retention setting of our Analytics account.
        </p>
      </LegalSection>

      <LegalSection heading="Your rights under the GDPR">
        <p>You have the right to:</p>
        <LegalList>
            <LegalItem>access the personal data we hold about you;</LegalItem>
            <LegalItem>have it corrected if it is wrong;</LegalItem>
            <LegalItem>have it deleted;</LegalItem>
            <LegalItem>restrict or object to how we use it;</LegalItem>
            <LegalItem>receive it in a portable format;</LegalItem>
            <LegalItem>withdraw consent at any time, for example through "Cookie settings" at the bottom of every page.</LegalItem>
          </LegalList>
        <p>
          To use any of these rights, email {mail}. You can also complain to the Information and Data Protection
          Commissioner (IDPC), the data protection authority in Malta.
        </p>
      </LegalSection>

      <LegalSection heading="Changes">
        <p>If we change how we use your data, we will update this page and the date at the top.</p>
      </LegalSection>
    </LegalPage>
  )
}
