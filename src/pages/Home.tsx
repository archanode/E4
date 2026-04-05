import { Link } from 'react-router-dom'
import logo from '../assets/logos/logo.jpeg'

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '1-on-1', label: 'Private Lessons' },
  { value: '98%', label: 'Student Satisfaction' },
  { value: '10+', label: 'Years of Excellence' },
]

const courses = [
  {
    level: 'Beginner',
    title: 'Chess Foundations',
    desc: 'Master the rules, basic tactics, and fundamental strategies to start your chess journey.',
    duration: '8 weeks',
    lessons: 16,
    icon: '♙',
  },
  {
    level: 'Intermediate',
    title: 'Tactical Mastery',
    desc: 'Sharpen your tactics with patterns, combinations, and positional understanding.',
    duration: '12 weeks',
    lessons: 24,
    icon: '♞',
  },
  {
    level: 'Advanced',
    title: 'Strategic Excellence',
    desc: 'Deep dive into advanced strategy, endgames, and opening theory at a high level.',
    duration: '16 weeks',
    lessons: 32,
    icon: '♛',
  },
]

const testimonials = [
  {
    quote: 'E4 Chess Academy transformed my game completely. Within 6 months I gained 200 rating points and my confidence at the board has never been higher.',
    name: 'Marco Vella',
    title: 'Club Player · Malta',
    rating: 5,
  },
  {
    quote: 'The lessons here are world-class. Every session is insightful beyond measure — I understand chess at a completely different level now.',
    name: 'Isabelle Fontaine',
    title: 'Tournament Player · France',
    rating: 5,
  },
  {
    quote: 'My daughter went from a complete beginner to winning her school championship in one year. The junior program is simply outstanding.',
    name: 'John Camilleri',
    title: 'Parent · Malta',
    rating: 5,
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Crect x='0' y='0' width='30' height='30'/%3E%3Crect x='30' y='30' width='30' height='30'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Gold radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={logo}
              alt="E4 Chess Academy"
              className="h-40 w-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>

          <div className="divider-gold mb-8" />

          <p className="section-label mb-4">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="gold-gradient">E4 Chess</span>
            <br />
            <span className="text-gold-100">Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-gold-100/60 font-body font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Where mastery meets elegance. Premium chess education delivered by
            Grandmasters and International Masters — shaping champions at every level.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="btn-primary">
              Explore Programs
            </Link>
            <Link to="/coaching" className="btn-outline">
              Book a Lesson
            </Link>
          </div>

          <div className="divider-gold mt-12" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gold-400/40 font-body tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-gold-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-dark-800 border-y border-gold-400/15 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl font-bold gold-gradient mb-2">{s.value}</div>
              <div className="text-xs text-gold-100/50 tracking-widest uppercase font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">Who We Are</p>
            <h2 className="section-title mb-6">
              A Legacy of Chess<br />
              <span className="gold-gradient">Excellence</span>
            </h2>
            <div className="divider-gold mb-8" style={{ margin: '0 0 2rem 0' }} />
            <p className="text-gold-100/60 font-body leading-relaxed mb-6">
              E4 Chess Academy was founded on the belief that chess is more than a game — it is a discipline that builds
              focus, strategic thinking, and resilience. Our expert teacher brings
              world-class instruction to students of all ages and levels.
            </p>
            <p className="text-gold-100/60 font-body leading-relaxed mb-10">
              Whether you're picking up a chess piece for the first time or preparing for your next rated tournament,
              our structured programs and personalised coaching will take your game to the next level.
            </p>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>

          {/* Chess board decoration */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative chess board */}
              <div
                className="w-full h-full opacity-20 border border-gold-400/30"
                style={{
                  backgroundImage: `repeating-conic-gradient(rgba(212,175,55,0.15) 0% 25%, transparent 0% 50%)`,
                  backgroundSize: '12.5% 12.5%',
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl opacity-30 text-gold-400">♛</span>
              </div>
              <div className="absolute -inset-4 border border-gold-400/10" />
              <div className="absolute -inset-8 border border-gold-400/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section className="py-24 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Learn & Grow</p>
            <h2 className="section-title mb-4">Our Programs</h2>
            <div className="divider-gold mb-6" />
            <p className="text-gold-100/50 font-body max-w-2xl mx-auto">
              Structured curricula designed by Grandmasters — from complete beginner to tournament competitor.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="card-luxury p-6 flex flex-col">
                <div className="text-5xl mb-4 opacity-60">{c.icon}</div>
                <span className="section-label text-xs mb-2">{c.level}</span>
                <h3 className="font-serif text-xl font-bold text-gold-100 mb-3">{c.title}</h3>
                <p className="text-sm text-gold-100/50 font-body leading-relaxed mb-6 flex-1">{c.desc}</p>
                <div className="flex justify-between text-xs text-gold-400/60 font-body mb-6 border-t border-gold-400/10 pt-4">
                  <span>{c.duration}</span>
                  <span>{c.lessons} lessons</span>
                </div>
                <Link to="/courses" className="btn-primary text-xs py-2.5 text-center">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/courses" className="btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY E4 ─── */}
      <section className="py-24 px-6 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Why Choose Us</p>
            <h2 className="section-title mb-4">The E4 Difference</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '♛', title: 'Expert Instruction', desc: 'Learn directly from a titled player with years of competitive and teaching experience.' },
              { icon: '♟', title: 'Structured Curriculum', desc: 'Every program follows a proven, GM-designed curriculum that builds skills systematically.' },
              { icon: '🏆', title: 'Tournament Pathway', desc: 'We prepare students for competitive play — from local club tournaments to FIDE-rated events.' },
              { icon: '🎯', title: 'Personalised Coaching', desc: 'Individual sessions tailored to your specific strengths, weaknesses, and goals.' },
              { icon: '💻', title: 'Online Lessons', desc: 'All lessons are conducted online via video — train from anywhere in the world, on your schedule.' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Monitor your improvement with detailed game analysis, performance reports, and milestone tracking.' },
            ].map((f) => (
              <div key={f.title} className="card-luxury p-7 flex gap-5">
                <div className="text-3xl shrink-0 mt-1">{f.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-gold-100 mb-2">{f.title}</h3>
                  <p className="text-sm text-gold-100/50 font-body leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Student Stories</p>
            <h2 className="section-title mb-4">What Our Students Say</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card-luxury p-8 flex flex-col">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-gold-100/65 font-body leading-relaxed italic flex-1 mb-8">"{t.quote}"</p>
                <div className="border-t border-gold-400/15 pt-6">
                  <div className="font-serif font-bold text-gold-100">{t.name}</div>
                  <div className="text-xs text-gold-400/60 font-body tracking-wide mt-1">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-dark-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Begin Your Journey</p>
          <h2 className="section-title mb-6">
            Ready to Elevate<br />
            <span className="gold-gradient">Your Game?</span>
          </h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body leading-relaxed mb-10 max-w-xl mx-auto">
            Join hundreds of students who have transformed their chess with E4 Academy's world-class coaching.
            Your first move starts here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-primary">
              Enroll Now
            </Link>
            <Link to="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
