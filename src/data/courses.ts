// Single source of truth for the three structured courses.
// Used by the Courses list, the course detail pages, route metadata and JSON-LD.

export interface Course {
  id: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  title: string
  desc: string
  duration: string
  lessons: string
  price: string
  priceNote: string
  icon: string
  format: string
  ageGroup: string
  highlights: string[]
}

export const courses: Course[] = [
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

export function findCourse(id: string | undefined): Course | undefined {
  return courses.find((c) => c.id === id)
}

/** Numeric price for structured data, e.g. "€300" -> "300". */
export function coursePriceAmount(course: Course): string {
  return course.price.replace(/[^0-9.]/g, '')
}
