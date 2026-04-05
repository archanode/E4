import { Link } from 'react-router-dom'

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
            <h2 className="font-serif text-4xl font-bold text-gold-100 mb-6">A Vision for Chess Excellence</h2>
            <div className="space-y-4 text-gold-100/60 font-body leading-relaxed">
              <p>
                E4 Chess Academy was founded on the belief that structured, high-quality chess education
                can unlock potential in students far beyond the chessboard.
              </p>
              <p>
                What began as a small group of dedicated students has grown into a thriving academy serving
                players of all ages — from children taking their first steps in chess to competitive adults aiming for titles.
              </p>
              <p>
                Our approach combines a rigorous, structured curriculum with personalised mentoring — ensuring every
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

      {/* Teacher */}
      <section className="py-24 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Who You'll Learn From</p>
            <h2 className="section-title mb-4">Meet Your Teacher</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 border-2 border-gold-400/30 bg-dark-700 flex items-center justify-center">
                  {/* Replace with real photo: <img src={teacherPhoto} alt="Teacher Name" className="w-full h-full object-cover" /> */}
                  <span className="text-8xl text-gold-400/20">♞</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400/10" />
                <div className="absolute -top-4 -left-4 w-full h-full border border-gold-400/5" />
              </div>
            </div>
            {/* Bio */}
            <div>
              <p className="section-label mb-3">FIDE Master</p>
              <h3 className="font-serif text-4xl font-bold text-gold-100 mb-2">John Doe</h3>
              <p className="text-gold-400 font-body tracking-wide mb-6">Founder & Head Teacher · E4 Chess Academy</p>
              <div className="divider-gold mb-8" style={{ margin: '0 0 2rem 0' }} />
              <div className="space-y-4 text-gold-100/60 font-body leading-relaxed mb-8">
                <p>
                  A FIDE Master with over 15 years of competitive experience at national and international level,
                  John has represented Malta in multiple Chess Olympiads and holds a peak rating of 2350.
                </p>
                <p>
                  His passion for teaching was sparked early in his career, when he realised that breaking down
                  complex positions into simple, understandable ideas was a skill he genuinely loved — and excelled at.
                </p>
                <p>
                  John's teaching philosophy is built on clarity, patience, and purpose. Every lesson is designed
                  around the student's individual needs, ensuring that progress is tangible, measurable, and — above all — enjoyable.
                </p>
              </div>
              {/* Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Peak Rating', value: '2350 FIDE' },
                  { label: 'Experience', value: '15+ Years' },
                  { label: 'Students Trained', value: '500+' },
                  { label: 'Speciality', value: 'Strategy & Endgames' },
                ].map((s) => (
                  <div key={s.label} className="border border-gold-400/15 p-4">
                    <p className="text-xs text-gold-400 uppercase tracking-widest font-body mb-1">{s.label}</p>
                    <p className="text-sm font-serif font-bold text-gold-100">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
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
