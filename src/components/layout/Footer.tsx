import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-gold-400/15">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src={logo} alt="E4 Chess Academy" className="h-16 w-auto object-contain"
              style={{ mixBlendMode: 'lighten' }} />
            <div>
              <span className="block font-serif text-2xl font-bold gold-gradient leading-none">E4</span>
              <span className="block text-xs tracking-widest text-gold-400/70 uppercase font-body">Chess Academy</span>
            </div>
          </Link>
          <p className="text-sm text-gold-100/50 font-body leading-relaxed mb-6">
            Where mastery meets elegance. Elevating chess education through world-class coaching and structured learning.
          </p>
          <div className="flex gap-4">
            {[
              { label: 'facebook', href: 'https://www.facebook.com/profile.php?id=61582035812016' },
              { label: 'instagram', href: 'https://www.instagram.com/elenaghitza_chess/' },
              { label: 'linkedin', href: 'https://www.linkedin.com/in/elena-ghitza-483880106/' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold-400/25 flex items-center justify-center text-gold-400/60 hover:text-gold-400 hover:border-gold-400/60 transition-colors"
              >
                <span className="text-xs uppercase">{s.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-serif text-gold-400 text-sm tracking-widest uppercase mb-6">Programs</h4>
          <ul className="space-y-3">
            {[
              { label: 'All Courses', to: '/courses' },
              { label: 'Private Lessons', to: '/coaching' },
              { label: 'Online Lessons', to: '/courses' },
              { label: 'Schedule', to: '/schedule' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-gold-100/55 hover:text-gold-400 font-body transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academy */}
        <div>
          <h4 className="font-serif text-gold-400 text-sm tracking-widest uppercase mb-6">Academy</h4>
          <ul className="space-y-3">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Blog & News', to: '/blog' },
              { label: 'Contact', to: '/contact' },
              { label: 'Student Portal', to: '/portal' },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-gold-100/55 hover:text-gold-400 font-body transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-gold-400 text-sm tracking-widest uppercase mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-body text-gold-100/55">
            <li className="flex gap-3">
              <span className="text-gold-400 mt-0.5">✦</span>
              <a href="mailto:info@e4chessacademy.com" className="hover:text-gold-400 transition-colors">
                info@e4chessacademy.com
              </a>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-400 mt-0.5">✦</span>
              <a href="tel:+35699672410" className="hover:text-gold-400 transition-colors">
                +356 99672410
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-xs text-gold-100/40 font-body mb-3 uppercase tracking-widest">Newsletter</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-dark-800 border border-gold-400/20 px-3 py-2 text-xs text-gold-100/80 placeholder-gold-100/30 focus:outline-none focus:border-gold-400/50 font-body"
              />
              <button type="submit" className="px-4 py-2 bg-gold-400 text-dark-900 text-xs font-bold font-body hover:bg-gold-300 transition-colors">
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-400/10 max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gold-100/30 font-body">
          © {new Date().getFullYear()} E4 Chess Academy. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
            <a key={l} href="#" className="text-xs text-gold-100/30 hover:text-gold-400 font-body transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
