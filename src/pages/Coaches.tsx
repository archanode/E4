import { Link } from 'react-router-dom'

const coaches = [
  {
    name: 'GM Alexander Petrov',
    title: 'Grandmaster',
    role: 'Founder & Head Coach',
    rating: 2680,
    specialities: ['Opening Theory', 'Middlegame Strategy', 'Tournament Preparation'],
    bio: 'Former World Championship Candidate and multiple national champion. Alexander has trained over 50 titled players during his coaching career and brings unmatched depth of knowledge to every session.',
    languages: ['English', 'Russian', 'Maltese'],
    experience: '20+ years',
    available: ['Online', 'In-Person'],
  },
  {
    name: 'IM Sofia Marchetti',
    title: 'International Master',
    role: 'Senior Coach & Curriculum Director',
    rating: 2420,
    specialities: ['Endgame Technique', 'Positional Play', 'Women\'s Chess'],
    bio: 'Women\'s International Master and curriculum specialist who designed the E4 Academy structured learning pathway. Sofia\'s approach blends classical technique with modern computer-assisted analysis.',
    languages: ['English', 'Italian'],
    experience: '12 years',
    available: ['Online', 'In-Person'],
  },
  {
    name: 'FM Daniel Borg',
    title: 'FIDE Master',
    role: 'Junior Coach & Youth Programme Lead',
    rating: 2310,
    specialities: ['Youth Development', 'Beginner Instruction', 'School Chess'],
    bio: 'Daniel is the heart of our junior programme — a FIDE Master with a gift for making chess accessible and exciting for young players. He has coached Malta\'s national junior team for 5 years.',
    languages: ['English', 'Maltese'],
    experience: '8 years',
    available: ['In-Person'],
  },
  {
    name: 'IM Carlos Rodrigues',
    title: 'International Master',
    role: 'Tactics & Online Coach',
    rating: 2390,
    specialities: ['Tactics Training', 'Calculation', 'Online Coaching'],
    bio: 'Tactical genius and online coaching specialist. Carlos runs the academy\'s popular weekly tactics workshops and is renowned for helping intermediate players break through rating plateaus.',
    languages: ['English', 'Portuguese', 'Spanish'],
    experience: '10 years',
    available: ['Online'],
  },
]

export default function Coaches() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Learn from the Best</p>
          <h1 className="section-title mb-6">Our Coaches</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Titled players, passionate educators — our coaching team brings world-class expertise to every student.
          </p>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {coaches.map((c, i) => (
            <div key={c.name} className={`card-luxury grid lg:grid-cols-3 overflow-hidden ${i % 2 === 1 ? '' : ''}`}>
              {/* Photo placeholder */}
              <div className="lg:col-span-1 bg-dark-700 flex flex-col items-center justify-center p-12 border-b lg:border-b-0 lg:border-r border-gold-400/10">
                <div className="w-32 h-32 border-2 border-gold-400/30 flex items-center justify-center mb-6 bg-dark-600">
                  <span className="text-6xl text-gold-400/30">♞</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-gold-100 text-center mb-1">{c.name}</h3>
                <p className="text-xs text-gold-400 tracking-widest uppercase font-body mb-1">{c.title}</p>
                <p className="text-xs text-gold-100/40 font-body text-center mb-6">{c.role}</p>
                <div className="border border-gold-400/25 px-5 py-2 mb-4">
                  <span className="text-sm font-body text-gold-400">FIDE Rating: {c.rating}</span>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {c.available.map((a) => (
                    <span key={a} className="text-xs border border-gold-400/20 px-3 py-1 text-gold-100/50 font-body">{a}</span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="lg:col-span-2 p-10">
                <p className="text-gold-100/60 font-body leading-relaxed mb-8">{c.bio}</p>

                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-xs text-gold-400 tracking-widest uppercase font-body mb-2">Specialities</p>
                    <ul className="space-y-1">
                      {c.specialities.map((s) => (
                        <li key={s} className="text-sm text-gold-100/60 font-body flex items-center gap-2">
                          <span className="text-gold-400 text-xs">✦</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-gold-400 tracking-widest uppercase font-body mb-2">Languages</p>
                    <ul className="space-y-1">
                      {c.languages.map((l) => (
                        <li key={l} className="text-sm text-gold-100/60 font-body flex items-center gap-2">
                          <span className="text-gold-400 text-xs">✦</span>{l}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-gold-400 tracking-widest uppercase font-body mb-2">Experience</p>
                    <p className="text-sm text-gold-100/60 font-body">{c.experience} coaching</p>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary text-xs">
                  Book a Session with {c.name.split(' ')[1]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-6">Find Your Perfect Coach</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8">
            Not sure which coach is right for you? We'll match you based on your level and goals.
          </p>
          <Link to="/contact" className="btn-primary">Get Matched</Link>
        </div>
      </section>
    </div>
  )
}
