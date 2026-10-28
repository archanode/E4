// Contact details shown in the footer. JSON-LD reads the same values so the
// structured data always matches what visitors see.

export const CONTACT_EMAIL = 'info@e4chessacademy.com'
export const CONTACT_PHONE_DISPLAY = '+356 99672410'
export const CONTACT_PHONE_TEL = '+35699672410'

export interface SocialLink {
  label: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'facebook', href: 'https://www.facebook.com/profile.php?id=61582035812016' },
  { label: 'instagram', href: 'https://www.instagram.com/elenaghitza_chess/' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/elena-ghitza-483880106/' },
]
