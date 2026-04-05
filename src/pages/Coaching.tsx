import { Link } from 'react-router-dom'

const packages = [
  {
    title: 'Single Lesson',
    icon: '♙',
    price: 30,
    per: 'lesson',
    desc: 'A one-off private lesson with one of our coaches — perfect for trying our teaching style or working on a specific topic.',
    features: ['60-minute session', 'Any topic of your choice', 'Game analysis included', 'Session recording available'],
    cta: 'Book a Lesson',
  },
  {
    title: 'Monthly Intensive',
    icon: '♛',
    price: 120,
    per: 'month',
    desc: 'Four private lessons per month with a dedicated coach — the fastest way to improve.',
    features: ['4 × 60-minute lessons', 'Dedicated coach assigned', 'Custom study plan', 'Ongoing game analysis', 'WhatsApp support'],
    cta: 'Start Monthly',
    featured: true,
  },
]

export default function Coaching() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">One-on-One</p>
          <h1 className="section-title mb-6">Private Lessons</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Individual lessons with titled players — tailored exactly to your level, goals, and schedule.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Simple Process</p>
            <h2 className="section-title mb-4">How It Works</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Free Assessment', desc: 'We assess your current level and discuss your goals in a free 30-minute consultation.' },
              { step: '02', title: 'Coach Match', desc: 'We match you with the ideal coach based on your level, style, and availability.' },
              { step: '03', title: 'Custom Plan', desc: 'Your coach builds a personalised study plan targeting your specific weaknesses.' },
              { step: '04', title: 'Start Improving', desc: 'Begin your lessons and track measurable progress with regular game analysis.' },
            ].map((s) => (
              <div key={s.step} className="card-luxury p-8 text-center relative">
                <div className="font-serif text-5xl font-bold text-gold-400/15 mb-4">{s.step}</div>
                <h3 className="font-serif text-lg font-bold text-gold-100 mb-3">{s.title}</h3>
                <p className="text-sm text-gold-100/50 font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Choose Your Path</p>
            <h2 className="section-title mb-4">Lesson Packages</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {packages.map((p) => (
              <div
                key={p.title}
                className={`relative flex flex-col ${p.featured ? 'card-luxury border-gold-400/50 shadow-[0_0_40px_rgba(212,175,55,0.1)]' : 'card-luxury'}`}
              >
                {p.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-dark-900 text-xs font-bold font-body px-6 py-1.5 tracking-widest uppercase">
                    Best Value
                  </div>
                )}
                <div className="p-8 border-b border-gold-400/10 text-center">
                  <div className="text-4xl mb-4 opacity-60">{p.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-gold-100 mb-2">{p.title}</h3>
                  <p className="text-sm text-gold-100/50 font-body mb-6">{p.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-4xl font-bold gold-gradient">€{p.price}</span>
                    <span className="text-sm text-gold-100/40 font-body">/{p.per}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <ul className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gold-100/65 font-body">
                        <span className="text-gold-400 shrink-0 mt-0.5">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={p.featured ? 'btn-primary text-center' : 'btn-outline text-center'}>
                    {p.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-16">
            <p className="section-label mb-4">How We Meet</p>
            <h2 className="section-title mb-4">Session Format</h2>
            <div className="divider-gold" />
          </div>
          <div className="card-luxury p-10">
            <div className="text-5xl mb-6">💻</div>
            <h3 className="font-serif text-2xl font-bold text-gold-100 mb-4">Online via Video</h3>
            <p className="text-gold-100/55 font-body leading-relaxed">
              All private lessons are conducted online via Zoom or Google Meet, using Lichess or Chess.com for the board.
              Train from anywhere in the world — all you need is a device and an internet connection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-6">Book Your Free Consultation</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8">
            Not sure where to start? Book a free 30-minute consultation and we'll find the right plan for you.
          </p>
          <Link to="/contact" className="btn-primary">Book Free Consultation</Link>
        </div>
      </section>
    </div>
  )
}
