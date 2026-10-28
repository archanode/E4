// Site-wide constants used for canonical URLs, Open Graph and structured data.

export const SITE_URL = 'https://e4chess.academy'
export const SITE_NAME = 'E4 Chess Academy'
/** Stable, unhashed copy of the logo in public/ so absolute URLs never change. */
export const LOGO_URL = `${SITE_URL}/logo.png`
// TODO(owner): replace with a 1200x630 social preview image when one exists.
export const OG_IMAGE_URL = LOGO_URL

/** Absolute canonical URL: home keeps its slash, every other path has none. */
export function canonicalUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

/** "/about/" -> "/about"; "/" stays "/". */
export function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}
