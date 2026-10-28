// JSON-LD builders. Every value comes from src/data (courses, contact) or the
// existing About page copy; nothing here is invented.
import { coursePriceAmount, type Course } from '../data/courses'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SOCIAL_LINKS } from '../data/contact'
import { canonicalUrl, LOGO_URL, SITE_NAME, SITE_URL } from './site'

const ORG_ID = `${SITE_URL}/#organization`

/** Short reference used inside other objects (e.g. Course.provider). */
const providerRef = {
  '@type': 'EducationalOrganization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
}

export function organizationJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_DISPLAY,
    address: { '@type': 'PostalAddress', addressCountry: 'MT' },
    // From the About page: "Founder & Head Teacher", "FIDE Instructor, National Chess Arbiter".
    founder: {
      '@type': 'Person',
      name: 'Elena Ghitza',
      jobTitle: 'Founder & Head Teacher',
      description: 'FIDE Instructor and National Chess Arbiter',
    },
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  }
}

/** Maps the free-text format field ("Online / Offline / Hybrid") to schema.org courseMode values. */
function courseModes(format: string): string[] {
  const words = format.replace(/\(.*?\)/g, '').toLowerCase()
  const modes: string[] = []
  if (words.includes('online')) modes.push('Online')
  if (words.includes('offline')) modes.push('Onsite')
  if (words.includes('hybrid')) modes.push('Blended')
  return modes
}

export function courseJsonLd(course: Course): object {
  const url = canonicalUrl(`/courses/${course.id}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.desc,
    url,
    educationalLevel: course.level,
    provider: providerRef,
    offers: {
      '@type': 'Offer',
      price: coursePriceAmount(course),
      priceCurrency: 'EUR',
      category: 'Paid',
      url,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: courseModes(course.format),
    },
  }
}
