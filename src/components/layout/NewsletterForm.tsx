import { useState } from 'react'
import NetlifyFormFields from '../forms/NetlifyFormFields'
import { CONTACT_EMAIL } from '../../data/contact'
import { formFields, submitNetlifyForm, type FormStatus } from '../../lib/netlifyForms'

const FORM_NAME = 'newsletter'

/** Footer newsletter sign-up, delivered to Netlify Forms as "newsletter". */
export default function NewsletterForm(): React.JSX.Element {
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const ok = await submitNetlifyForm(FORM_NAME, formFields(e.currentTarget))
    setStatus(ok ? 'success' : 'error')
  }

  if (status === 'success') {
    return <p className="text-xs text-gold-100/60 font-body">Thank you. You are on the list.</p>
  }

  return (
    <>
      <form
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="flex gap-2"
      >
        <NetlifyFormFields formName={FORM_NAME} />
        <input
          type="email"
          name="email"
          required
          aria-label="Your email"
          placeholder="Your email"
          className="flex-1 bg-dark-800 border border-gold-400/20 px-3 py-2 text-xs text-gold-100/80 placeholder-gold-100/30 focus:outline-none focus:border-gold-400/50 font-body"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          aria-label="Subscribe"
          className="px-4 py-2 bg-gold-400 text-dark-900 text-xs font-bold font-body hover:bg-gold-300 transition-colors disabled:opacity-60"
        >
          →
        </button>
      </form>
      {status === 'error' && (
        <p role="alert" className="text-xs text-red-400 font-body mt-2">
          Sorry, that did not work. Please email us at {CONTACT_EMAIL}.
        </p>
      )}
    </>
  )
}
