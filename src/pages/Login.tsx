import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logos/logo.jpeg'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Auth logic here
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/">
            <img src={logo} alt="E4 Chess Academy" className="h-20 w-auto object-contain mx-auto mb-4" />
          </Link>
          <p className="section-label">Student Portal</p>
          <h1 className="font-serif text-3xl font-bold text-gold-100 mt-2">Sign In</h1>
          <div className="divider-gold mt-4" />
        </div>

        <div className="card-luxury p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs text-gold-400 uppercase tracking-widest font-body">Password</label>
                <a href="#" className="text-xs text-gold-400/60 hover:text-gold-400 font-body transition-colors">Forgot password?</a>
              </div>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center mt-2">
              Sign In
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gold-400/10 text-center">
            <p className="text-xs text-gold-100/40 font-body mb-4">Or sign in with</p>
            <button className="w-full border border-gold-400/20 py-3 text-sm text-gold-100/60 font-body hover:border-gold-400/40 hover:text-gold-100/80 transition-colors flex items-center justify-center gap-3">
              <span>G</span> Continue with Google
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gold-100/40 font-body mt-6">
          Not a member?{' '}
          <Link to="/register" className="text-gold-400 hover:text-gold-300 transition-colors">Enroll today</Link>
        </p>
      </div>
    </div>
  )
}
