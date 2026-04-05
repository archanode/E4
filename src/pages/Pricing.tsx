import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Explorer',
    icon: '♙',
    price: 49,
    per: 'month',
    desc: 'Perfect for beginners getting started on their chess journey.',
    features: [
      'Access to 1 group class per week',
      'Basic lesson library (beginner)',
      'Monthly game analysis (1 game)',
      'Academy newsletter',
      'Student community access',
    ],
    excluded: ['Private coaching sessions', 'Advanced lesson library', 'Tournament entry discounts'],
    cta: 'Start Exploring',
    featured: false,
  },
  {
    name: 'Scholar',
    icon: '♞',
    price: 99,
    per: 'month',
    desc: 'For dedicated students who want to improve consistently.',
    features: [
      'Access to 2 group classes per week',
      'Full lesson library (all levels)',
      'Monthly game analysis (3 games)',
      '1 private coaching session/month',
      '10% tournament entry discount',
      'Progress tracking dashboard',
      'Priority scheduling',
    ],
    excluded: ['Unlimited private sessions'],
    cta: 'Become a Scholar',
    featured: true,
  },
  {
    name: 'Master',
    icon: '♛',
    price: 199,
    per: 'month',
    desc: 'For serious players who want elite-level improvement.',
    features: [
      'Unlimited group class access',
      'Full lesson library (all levels)',
      'Unlimited game analysis',
      '4 private coaching sessions/month',
      '25% tournament entry discount',
      'Dedicated coach assignment',
      'Custom opening repertoire',
      'Priority scheduling',
      'WhatsApp coach access',
    ],
    excluded: [],
    cta: 'Go Master',
    featured: false,
  },
]

const addons = [
  { title: 'Extra Private Session', price: '€55', desc: 'Add an additional 60-min private session to any plan.' },
  { title: 'Game Analysis Pack', price: '€30', desc: '5 in-depth game analyses by a titled coach.' },
  { title: 'Tournament Entry', price: 'From €20', desc: 'Entry to any E4-hosted tournament (members get discount).' },
  { title: 'Opening Repertoire Pack', price: '€80', desc: 'Custom opening repertoire built specifically for you.' },
]

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h1 className="section-title mb-6">Membership Plans</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Straightforward plans with no hidden fees. Cancel or upgrade anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col ${
                  p.featured
                    ? 'card-luxury border-gold-400/50 shadow-[0_0_50px_rgba(212,175,55,0.12)]'
                    : 'card-luxury'
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-dark-900 text-xs font-bold font-body px-6 py-1.5 tracking-widest uppercase whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="p-8 text-center border-b border-gold-400/10">
                  <div className="text-5xl mb-4 opacity-50">{p.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-gold-100 mb-2">{p.name}</h3>
                  <p className="text-sm text-gold-100/50 font-body mb-6">{p.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-5xl font-bold gold-gradient">€{p.price}</span>
                    <span className="text-sm text-gold-100/40 font-body">/{p.per}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <ul className="space-y-3 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gold-100/70 font-body">
                        <span className="text-gold-400 shrink-0 mt-0.5">✦</span>
                        {f}
                      </li>
                    ))}
                    {p.excluded.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gold-100/25 font-body line-through">
                        <span className="text-gold-100/20 shrink-0 mt-0.5">✗</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      to="/register"
                      className={`block text-center ${p.featured ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {p.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gold-100/35 font-body mt-8">
            All plans billed monthly. No contracts. Cancel anytime. Private lesson rates apply separately.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Customize Your Experience</p>
            <h2 className="section-title mb-4">Add-ons</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((a) => (
              <div key={a.title} className="card-luxury p-6">
                <h3 className="font-serif text-lg font-bold text-gold-100 mb-2">{a.title}</h3>
                <p className="text-sm text-gold-100/50 font-body leading-relaxed mb-4">{a.desc}</p>
                <div className="font-serif text-2xl gold-gradient font-bold">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Questions Answered</p>
            <h2 className="section-title mb-4">FAQ</h2>
            <div className="divider-gold" />
          </div>
          <div className="space-y-4">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes. All plans are month-to-month with no lock-in. Cancel before your next billing date and you won\'t be charged.' },
              { q: 'Do you offer family discounts?', a: 'Yes — families with 2+ members receive 15% off each additional membership.' },
              { q: 'Is there a free trial?', a: 'We offer a free 30-minute assessment session so you can meet a coach and experience our teaching before committing.' },
              { q: 'Can I switch plans?', a: 'Absolutely. Upgrade or downgrade your plan at any time — changes take effect at the start of your next billing cycle.' },
              { q: 'Do you offer student discounts?', a: 'Yes — full-time students receive 10% off all membership plans with valid student ID.' },
            ].map((item) => (
              <div key={item.q} className="card-luxury p-6">
                <h4 className="font-serif text-lg font-bold text-gold-100 mb-3">{item.q}</h4>
                <p className="text-sm text-gold-100/55 font-body leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
