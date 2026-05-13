import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logos/logo-removebg.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Programs',
    children: [
      { label: 'Courses', to: '/courses' },
      { label: 'Private Lessons', to: '/coaching' },
      { label: 'Schedule', to: '/schedule' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/98 backdrop-blur-md border-b border-gold-400/20 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="E4 Chess Academy"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block">
            <span className="block font-serif text-xl font-bold gold-gradient leading-none">E4</span>
            <span className="block text-xs tracking-widest text-gold-400/80 uppercase font-body">Chess Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => openDropdown(link.label)}
                onMouseLeave={scheduleClose}
              >
                <button className="px-4 py-2 text-sm font-body font-medium text-gold-100/80 hover:text-gold-400 tracking-wide transition-colors flex items-center gap-1">
                  {link.label}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === link.label && (
                  <ul
                    className="absolute top-full left-0 w-56 bg-dark-800 border border-gold-400/20 shadow-xl shadow-black/50 py-2"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    {link.children.map((child) => (
                      <li key={child.to}>
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm font-body transition-colors ${
                              isActive
                                ? 'text-gold-400 bg-gold-400/10'
                                : 'text-gold-100/80 hover:text-gold-400 hover:bg-gold-400/5'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.to}>
                <NavLink
                  to={link.to!}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors ${
                      isActive ? 'text-gold-400' : 'text-gold-100/80 hover:text-gold-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="btn-outline text-xs py-2 px-5">
            Sign In
          </Link>
          <Link to="/register" className="btn-primary text-xs py-2 px-5">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur-md border-t border-gold-400/20">
          <ul className="px-6 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <span className="block px-3 py-2 text-xs tracking-widest uppercase text-gold-400 font-body font-bold">
                    {link.label}
                  </span>
                  {link.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block px-6 py-2 text-sm font-body ${isActive ? 'text-gold-400' : 'text-gold-100/70'}`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink
                    to={link.to!}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-sm font-body border-b border-gold-400/10 ${
                        isActive ? 'text-gold-400' : 'text-gold-100/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
            <li className="pt-4 flex flex-col gap-3">
              <Link to="/login" className="btn-outline text-center text-sm">Sign In</Link>
              <Link to="/register" className="btn-primary text-center text-sm">Enroll Now</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
