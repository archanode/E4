import { Link } from 'react-router-dom'

const upcoming = [
  {
    title: 'E4 Spring Open 2026',
    date: 'April 5–6, 2026',
    type: 'FIDE Rated',
    format: 'Swiss 7 Rounds',
    location: 'E4 Chess Academy, Valletta',
    prize: '€1,500',
    deadline: 'March 28, 2026',
    open: true,
  },
  {
    title: 'Junior Championship 2026',
    date: 'April 19, 2026',
    type: 'Academy Rated',
    format: 'Swiss 6 Rounds',
    location: 'E4 Chess Academy, Valletta',
    prize: 'Trophies & Medals',
    deadline: 'April 12, 2026',
    open: true,
  },
  {
    title: 'Blitz Night — Monthly',
    date: 'Last Friday of each month',
    type: 'Unrated',
    format: 'Blitz 5+3',
    location: 'E4 Chess Academy, Valletta',
    prize: 'Academy Credits',
    deadline: 'Day of event',
    open: true,
  },
]

const past = [
  { title: 'E4 Winter Rapid 2025', date: 'Dec 14, 2025', winner: 'FM Daniel Borg', participants: 48 },
  { title: 'Junior Championship 2025', date: 'Nov 2, 2025', winner: 'Luke Mifsud', participants: 24 },
  { title: 'E4 Autumn Open 2025', date: 'Oct 11–12, 2025', winner: 'GM Alexander Petrov', participants: 72 },
  { title: 'Club Blitz Championship 2025', date: 'Sep 26, 2025', winner: 'Maria Zammit', participants: 38 },
]

export default function Tournaments() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Compete & Excel</p>
          <h1 className="section-title mb-6">Tournaments</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            E4 Academy hosts FIDE-rated tournaments, rapid events, and junior championships throughout the year.
          </p>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-4">Don't Miss Out</p>
            <h2 className="section-title mb-4">Upcoming Tournaments</h2>
            <div className="divider-gold" style={{ margin: '0 0 0 0' }} />
          </div>
          <div className="space-y-6">
            {upcoming.map((t) => (
              <div key={t.title} className="card-luxury grid md:grid-cols-4 gap-0 overflow-hidden">
                <div className="md:col-span-3 p-8 border-b md:border-b-0 md:border-r border-gold-400/10">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <h3 className="font-serif text-2xl font-bold text-gold-100">{t.title}</h3>
                    <span className="text-xs border border-gold-400/30 text-gold-400 px-3 py-1 font-body">{t.type}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-body text-gold-100/55">
                    <div><span className="text-gold-400 block text-xs mb-1 uppercase tracking-widest">Date</span>{t.date}</div>
                    <div><span className="text-gold-400 block text-xs mb-1 uppercase tracking-widest">Format</span>{t.format}</div>
                    <div><span className="text-gold-400 block text-xs mb-1 uppercase tracking-widest">Location</span>{t.location}</div>
                    <div><span className="text-gold-400 block text-xs mb-1 uppercase tracking-widest">Prizes</span>{t.prize}</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col items-center justify-center text-center">
                  <p className="text-xs text-gold-100/40 font-body mb-1 uppercase tracking-widest">Deadline</p>
                  <p className="text-sm text-gold-100/70 font-body mb-6">{t.deadline}</p>
                  <Link to="/register" className="btn-primary text-xs w-full text-center">Register</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="section-label mb-4">Hall of Fame</p>
            <h2 className="section-title mb-4">Past Results</h2>
            <div className="divider-gold" style={{ margin: '0 0 0 0' }} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="border-b border-gold-400/20 text-left">
                  <th className="pb-4 pr-6 text-xs text-gold-400 uppercase tracking-widest font-bold">Tournament</th>
                  <th className="pb-4 pr-6 text-xs text-gold-400 uppercase tracking-widest font-bold">Date</th>
                  <th className="pb-4 pr-6 text-xs text-gold-400 uppercase tracking-widest font-bold">Winner</th>
                  <th className="pb-4 text-xs text-gold-400 uppercase tracking-widest font-bold">Participants</th>
                </tr>
              </thead>
              <tbody>
                {past.map((p, i) => (
                  <tr key={i} className="border-b border-gold-400/10 hover:bg-gold-400/5 transition-colors">
                    <td className="py-4 pr-6 text-gold-100/80">{p.title}</td>
                    <td className="py-4 pr-6 text-gold-100/50">{p.date}</td>
                    <td className="py-4 pr-6 text-gold-400">{p.winner}</td>
                    <td className="py-4 text-gold-100/50">{p.participants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Organise */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4">Host an Event</p>
          <h2 className="section-title mb-6">Want to Organise a Tournament?</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8">
            We offer our venue and arbiter services for external tournaments. Contact us to discuss your event.
          </p>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}
