import type { ReactNode } from 'react'

interface LegalPageProps {
  label: string
  title: string
  updated: string
  children: ReactNode
}

/** Shared shell for plain text pages (privacy, cookies): hero + readable column. */
export function LegalPage({ label, title, updated, children }: LegalPageProps): React.JSX.Element {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">{label}</p>
          <h1 className="section-title mb-6">{title}</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body text-sm">Last updated: {updated}</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gold-100/65 font-body leading-relaxed">{children}</div>
      </section>
    </div>
  )
}

interface SectionProps {
  heading: string
  children: ReactNode
}

export function LegalSection({ heading, children }: SectionProps): React.JSX.Element {
  return (
    <div className="space-y-4">
      <h2 className="font-serif text-2xl font-bold text-gold-100">{heading}</h2>
      {children}
    </div>
  )
}

export function LegalList({ children }: { children: ReactNode }): React.JSX.Element {
  return <ul className="space-y-2">{children}</ul>
}

export function LegalItem({ children }: { children: ReactNode }): React.JSX.Element {
  return (
    <li className="flex items-start gap-3">
      <span className="text-gold-400 shrink-0 mt-0.5">✦</span>
      <span>{children}</span>
    </li>
  )
}
