// The ONE list of prerendered routes. The prerender script renders each entry
// to static HTML and builds sitemap.xml from the entries with sitemap: true.
import { courses, type Course } from '../data/courses'
import { courseJsonLd, organizationJsonLd } from './structuredData'

export interface RouteMeta {
  path: string
  /** Full <title>. Every page except home ends with " | E4 Chess Academy". */
  title: string
  /** 140 to 160 characters, enforced by the prerender script. */
  description: string
  ogType: 'website' | 'article'
  /** Public pages go into the sitemap; noindex pages never do. */
  sitemap: boolean
  noindex?: boolean
  /** JSON-LD objects rendered as <script type="application/ld+json">. */
  jsonLd?: object[]
}

const SUFFIX = ' | E4 Chess Academy'

const courseDescriptions: Record<string, string> = {
  'chess-foundations':
    'Beginners chess course for ages 6+: 12 lessons over 6–8 weeks covering rules, checkmate patterns, opening principles and basic tactics. €300, online or offline.',
  'intermediate-tactics':
    'Intermediate chess course for ages 8+: 16 lessons over 8–10 weeks on openings, tactics, calculation, pawn structures, endgames. €400, online, offline, hybrid.',
  'advanced-strategy':
    'Advanced chess course for ages 10+: 20 lessons over 10–12 weeks on deep calculation, positional play, advanced endgames and tournament preparation. €500.',
}

function courseRoute(course: Course): RouteMeta {
  return {
    path: `/courses/${course.id}`,
    title: `${course.level} Chess Course${SUFFIX}`,
    description: courseDescriptions[course.id],
    ogType: 'website',
    sitemap: true,
    jsonLd: [courseJsonLd(course)],
  }
}

export const routes: RouteMeta[] = [
  {
    path: '/',
    title: 'E4 Chess Academy | Premium Chess Lessons and Courses in Malta',
    description:
      'E4 Chess Academy offers premium chess education in Malta and online: structured courses and private lessons for every level. Book a free first lesson today.',
    ogType: 'website',
    sitemap: true,
    jsonLd: [organizationJsonLd()],
  },
  {
    path: '/about',
    title: `About Us and Founder Elena Ghitza${SUFFIX}`,
    description:
      'Meet Elena Ghitza, FIDE Instructor, National Chess Arbiter and founder of E4 Chess Academy, who represented Malta at the Chess Olympiad in Budapest.',
    ogType: 'website',
    sitemap: true,
  },
  {
    path: '/courses',
    title: `Chess Courses for Beginner, Intermediate and Advanced Players${SUFFIX}`,
    description:
      'Structured chess courses for beginner, intermediate and advanced players, online or in person. From first moves to tournament play. Book a free first lesson.',
    ogType: 'website',
    sitemap: true,
  },
  ...courses.map(courseRoute),
  {
    path: '/coaching',
    title: `Private Online Chess Lessons${SUFFIX}`,
    description:
      'Private online chess lessons tailored to your level, goals and schedule. Single lessons from €30 or four lessons a month for €120. Your first lesson is free.',
    ogType: 'website',
    sitemap: true,
  },
  {
    path: '/schedule',
    title: `Weekly Chess Class Schedule${SUFFIX}`,
    description:
      'Weekly chess class timetable at E4 Chess Academy: beginner groups, tactics workshops, endgame masterclasses and advanced strategy, online and in person.',
    ogType: 'website',
    sitemap: true,
  },
  {
    path: '/contact',
    title: `Contact Us and Book a Free First Lesson${SUFFIX}`,
    description:
      'Contact E4 Chess Academy by phone, email or the contact form to ask a question, enrol in a course or book a free first chess lesson. We reply within 24 hours.',
    ogType: 'website',
    sitemap: true,
  },
  {
    path: '/login',
    title: `Sign In${SUFFIX}`,
    description:
      'Sign in to the E4 Chess Academy student portal to access your lessons, progress and account. New students can create an account and enrol in a chess course.',
    ogType: 'website',
    sitemap: false,
    noindex: true,
  },
  {
    path: '/register',
    title: `Create Your Account${SUFFIX}`,
    description:
      'Create your E4 Chess Academy account in three steps: share your details, tell us your chess level and goals, and choose the plan that suits your training.',
    ogType: 'website',
    sitemap: false,
    noindex: true,
  },
  {
    path: '/portal',
    title: `Student Dashboard${SUFFIX}`,
    description:
      'The E4 Chess Academy student dashboard, where enrolled students can follow their lessons, track progress and manage their chess training in one place.',
    ogType: 'website',
    sitemap: false,
    noindex: true,
  },
]

/** Served as dist/404.html for every unknown path. */
export const notFoundRoute: RouteMeta = {
  path: '/404',
  title: `Page Not Found${SUFFIX}`,
  description:
    'The page you were looking for could not be found on the E4 Chess Academy website. Return to the home page, browse our chess courses or contact us for help.',
  ogType: 'website',
  sitemap: false,
  noindex: true,
}

export function findRouteMeta(path: string): RouteMeta {
  return routes.find((r) => r.path === path) ?? notFoundRoute
}
