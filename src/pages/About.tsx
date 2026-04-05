import { Link } from 'react-router-dom'

const team = [
  { name: 'GM Alexander Petrov', role: 'Founder & Head Coach', bio: 'Former World Championship Candidate with over 20 years of coaching experience at the highest level.' },
  { name: 'IM Sofia Marchetti', role: 'Senior Coach & Curriculum Director', bio: 'Women\'s International Master specialising in endgame technique and structured curriculum development.' },
  { name: 'FM Daniel Borg', role: 'Junior Coach & Youth Programme Lead', bio: 'FIDE Master passionate about nurturing the next generation of chess champions in Malta and beyond.' },
  { name: 'Maria Zammit', role: 'Academy Manager', bio: 'Overseeing operations, student relations, and the day-to-day running of the academy with meticulous care.' },
]

const values = [
  { icon: '♛', title: 'Excellence', desc: 'We hold ourselves to the highest standard in everything — coaching quality, student care, and results.' },
  { icon: '♟', title: 'Integrity', desc: 'Chess teaches honesty. We bring that same integrity to every interaction with our students and families.' },
  { icon: '🎓', title: 'Education', desc: 'We are educators first. Chess is our medium for teaching focus, discipline, and strategic thinking.' },
  { icon: '🤝', title: 'Community', desc: 'We foster a warm, welcoming community where players of all levels belong and thrive together.' },
]

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 text-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Our Story</p>
          <h1 className="section-title mb-6">About E4 Chess Academy</h1>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/60 font-body leading-relaxed text-lg">
            Born from a passion for chess and a vision to make world-class coaching accessible, E4 Chess Academy
            has become Malta's premier destination for serious chess education.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">How It Started</p>
            <h2 className="font-serif text-4xl font-bold text-gold-100 mb-6">A Grandmaster's Vision</h2>
            <div className="space-y-4 text-gold-100/60 font-body leading-relaxed">
              <p>
                E4 Chess Academy was founded in 2014 by Grandmaster Alexander Petrov, who believed that structured,
                high-quality chess education could unlock potential in students far beyond the chessboard.
              </p>
              <p>
                What began as a small group of dedicated students has grown into a thriving academy serving hundreds
                of players — from children taking their first steps in chess to competitive adults aiming for titles.
              </p>
              <p>
                Our approach combines rigorous, GM-designed curricula with personalised mentoring — ensuring every
                student gets the guidance they need to progress at their own pace while being held to the highest standards.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-80 h-80 border border-gold-400/20 flex items-center justify-center bg-dark-700 relative">
              <span className="text-8xl text-gold-400/20">♚</span>
              <div className="absolute top-4 left-4 w-full h-full border border-gold-400/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 className="section-title mb-4">Our Values</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-luxury p-8 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl font-bold text-gold-100 mb-3">{v.title}</h3>
                <p className="text-sm text-gold-100/50 font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">The People Behind E4</p>
            <h2 className="section-title mb-4">Meet Our Team</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <div key={m.name} className="card-luxury p-7 text-center">
                <div className="w-20 h-20 mx-auto mb-5 border border-gold-400/25 flex items-center justify-center bg-dark-700">
                  <span className="text-3xl text-gold-400/40">♞</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-gold-100 mb-1">{m.name}</h3>
                <p className="text-xs text-gold-400 tracking-wide font-body mb-3">{m.role}</p>
                <p className="text-sm text-gold-100/50 font-body leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="section-title mb-6">Ready to Join Our Community?</h2>
          <div className="divider-gold mb-8" />
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-primary">Enroll Today</Link>
            <Link to="/contact" className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
