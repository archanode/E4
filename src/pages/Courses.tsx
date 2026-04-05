import { useState } from 'react'
import { Link } from 'react-router-dom'

const courses = [
  {
    id: 'chess-foundations',
    level: 'Beginner',
    title: 'Beginners Course',
    desc: 'Designed for complete beginners or players with very basic knowledge. Students will build a strong foundation in chess, learning the rules, essential patterns, and how to confidently play full games.',
    duration: '6–8 weeks',
    lessons: '12 lessons',
    price: '€300',
    priceNote: '',
    icon: '♙',
    format: 'Online / Offline',
    ageGroup: '6+ (kids, teens, adults)',
    highlights: [
      'Rules of chess & piece movement',
      'Check, checkmate, stalemate',
      'Basic mating patterns (queen, rook, ladder mate)',
      'Introduction to openings (principles)',
      'Basic tactics (forks, pins, simple combinations)',
      'Introduction to planning',
      'Playing complete games with guidance',
    ],
  },
  {
    id: 'intermediate-tactics',
    level: 'Intermediate',
    title: 'Intermediate Course',
    desc: 'For players who already know the basics and want to improve their understanding, reduce mistakes, and start thinking strategically.',
    duration: '8–10 weeks',
    lessons: '16 lessons',
    price: '€400',
    priceNote: '',
    icon: '♞',
    format: 'Online / Offline / Hybrid',
    ageGroup: '8+ (kids with basics & adults)',
    highlights: [
      'Opening repertoire (for White & Black)',
      'Tactical patterns (pins, skewers, sacrifices, combinations)',
      'Calculation basics — how to think during a game',
      'Middlegame strategy: piece activity, weak squares, planning',
      'Pawn structures (isolated, doubled, passed pawns)',
      'Basic endgames (king + pawn, rook endgames)',
      'Game analysis & mistake correction',
    ],
  },
  {
    id: 'advanced-strategy',
    level: 'Advanced',
    title: 'Advanced Course',
    desc: 'Designed for serious players who want to compete, improve their rating, and develop a deep understanding of chess at a strategic and practical level.',
    duration: '10–12 weeks',
    lessons: '20 lessons',
    price: '€500',
    priceNote: '',
    icon: '♛',
    format: 'Online / Offline (1-on-1 or small groups)',
    ageGroup: '10+ (or strong younger players)',
    highlights: [
      'Full opening repertoire building',
      'Deep calculation & candidate moves',
      'Advanced tactics & combinations',
      'Middlegame mastery: positional play, imbalances, long-term planning',
      'Advanced endgames (Lucena, Philidor, minor piece techniques)',
      'Game analysis including student games',
      'Tournament preparation & psychology',
    ],
  },
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Courses() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? courses : courses.filter((c) => c.level === filter)

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Learn Chess</p>
          <h1 className="section-title mb-6">Our Programs</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">
            Structured curricula designed by Grandmasters for every level — from first moves to tournament glory.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-gold-400/15 sticky top-20 z-30 bg-dark-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`px-5 py-2 text-xs font-body font-bold tracking-widest uppercase transition-all ${
                filter === l
                  ? 'bg-gold-400 text-dark-900'
                  : 'border border-gold-400/25 text-gold-100/60 hover:border-gold-400/50 hover:text-gold-400'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c) => (
            <div key={c.id} className="card-luxury flex flex-col">
              <div className="p-8 border-b border-gold-400/10 flex items-start gap-4">
                <span className="text-5xl opacity-50">{c.icon}</span>
                <div>
                  <span className="section-label text-xs">{c.level}</span>
                  <h3 className="font-serif text-xl font-bold text-gold-100 mt-1">{c.title}</h3>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm text-gold-100/55 font-body leading-relaxed mb-6">{c.desc}</p>
                <ul className="space-y-2 mb-8">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gold-100/60 font-body">
                      <span className="text-gold-400 mt-0.5 shrink-0">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-3 gap-3 mb-8 text-xs font-body text-gold-100/50 border-t border-gold-400/10 pt-6">
                  <div><span className="text-gold-400 block mb-1">Duration</span>{c.duration}</div>
                  <div><span className="text-gold-400 block mb-1">Lessons</span>{c.lessons}</div>
                  <div><span className="text-gold-400 block mb-1">Format</span>{c.format}</div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="font-serif text-xl font-bold gold-gradient">{c.price}</span>
                    {c.priceNote && <p className="text-xs text-gold-100/35 font-body mt-0.5">{c.priceNote}</p>}
                  </div>
                  <Link to={`/courses/${c.id}`} className="btn-primary text-xs py-2.5 px-5">
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark-800 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4">Not Sure Where to Start?</p>
          <h2 className="section-title mb-6">Take Our Free Assessment</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8 leading-relaxed">
            Our teacher will evaluate your current level and recommend the perfect program for your goals.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Assessment</Link>
        </div>
      </section>
    </div>
  )
}
