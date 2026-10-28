import { useState } from 'react'
import NetlifyFormFields from '../components/forms/NetlifyFormFields'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from '../data/contact'
import { formFields, submitNetlifyForm, type FormStatus } from '../lib/netlifyForms'

const FORM_NAME = 'contact'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    // Thank-you state only after Netlify confirms with a 2xx response.
    const ok = await submitNetlifyForm(FORM_NAME, formFields(e.currentTarget))
    setStatus(ok ? 'success' : 'error')
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="section-title mb-6">Contact Us</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Have a question? Ready to enroll? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="section-label mb-6">Find Us</p>
              <div className="space-y-6">
                {[
                  { icon: '📞', label: 'Phone', value: CONTACT_PHONE_DISPLAY },
                  { icon: '✉️', label: 'Email', value: CONTACT_EMAIL },
                  { icon: '🕐', label: 'Office Hours', value: 'Mon–Fri: 9:00 – 18:00\nSat: 9:00 – 14:00' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gold-400 uppercase tracking-widest font-body mb-1">{item.label}</p>
                      <p className="text-sm text-gold-100/65 font-body whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-gold-400 uppercase tracking-widest font-body mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61582035812016' },
                  { label: 'Instagram', href: 'https://www.instagram.com/elenaghitza_chess/' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elena-ghitza-483880106/' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    title={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-gold-400/25 flex items-center justify-center text-gold-400/60 hover:text-gold-400 hover:border-gold-400/60 transition-colors text-xs font-body"
                  >
                    {s.label[0]}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2 card-luxury p-10">
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-6">✦</div>
                <h3 className="font-serif text-2xl font-bold text-gold-100 mb-4">Message Received</h3>
                <p className="text-gold-100/55 font-body">
                  Thank you for reaching out. A member of our team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-serif text-2xl font-bold text-gold-100 mb-8">Send Us a Message</h2>
                <form
                  name={FORM_NAME}
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <NetlifyFormFields formName={FORM_NAME} />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
                        placeholder="+356 xxxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
                      >
                        <option value="">Select a topic...</option>
                        <option>Course Enquiry</option>
                        <option>Private Lessons</option>
                        <option>Tournament Registration</option>
                        <option>Junior Programme</option>
                        <option>Pricing & Membership</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-400 font-body">
                      Sorry, your message could not be sent. Please email us at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
