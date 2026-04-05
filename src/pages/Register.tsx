import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logos/logo.jpeg'

export default function Register() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', dob: '',
    level: '', plan: '', goals: '', agreeTerms: false,
  })

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep((s) => s + 1)
  }

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/">
            <img src={logo} alt="E4 Chess Academy" className="h-20 w-auto object-contain mx-auto mb-4" />
          </Link>
          <p className="section-label">Join the Academy</p>
          <h1 className="font-serif text-3xl font-bold text-gold-100 mt-2">Create Your Account</h1>
          <div className="divider-gold mt-4" />
        </div>

        {/* Progress */}
        <div className="flex justify-between mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold-400/15 -translate-y-1/2" />
          {[1, 2, 3].map((s) => (
            <div key={s} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-8 h-8 flex items-center justify-center text-xs font-bold font-body border transition-all ${
                step >= s ? 'bg-gold-400 text-dark-900 border-gold-400' : 'border-gold-400/25 text-gold-100/30'
              }`}>
                {step > s ? '✓' : s}
              </div>
              <span className="text-xs text-gold-100/40 font-body hidden sm:block">
                {s === 1 ? 'Personal Info' : s === 2 ? 'Your Level' : 'Choose Plan'}
              </span>
            </div>
          ))}
        </div>

        <div className="card-luxury p-8">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-gold-100 mb-6">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">First Name *</label>
                  <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 focus:outline-none focus:border-gold-400/50 font-body" />
                </div>
                <div>
                  <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Last Name *</label>
                  <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 focus:outline-none focus:border-gold-400/50 font-body" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 focus:outline-none focus:border-gold-400/50 font-body" />
              </div>
              <div>
                <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 focus:outline-none focus:border-gold-400/50 font-body" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center mt-4">Continue →</button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-gold-100 mb-6">Your Chess Level</h2>
              <div>
                <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-3">Current Level *</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Complete Beginner', 'Beginner', 'Intermediate', 'Advanced', 'Tournament Player'].map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setForm({ ...form, level: l })}
                      className={`py-3 px-4 text-sm font-body border transition-all text-left ${
                        form.level === l
                          ? 'border-gold-400 bg-gold-400/10 text-gold-400'
                          : 'border-gold-400/20 text-gold-100/50 hover:border-gold-400/40'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs text-gold-400 uppercase tracking-widest font-body mb-2">Your Goals</label>
                <textarea rows={3} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })}
                  placeholder="What do you hope to achieve at E4 Chess Academy?"
                  className="w-full bg-dark-700 border border-gold-400/20 px-4 py-3 text-sm text-gold-100/80 placeholder-gold-100/25 focus:outline-none focus:border-gold-400/50 font-body resize-none" />
              </div>
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">← Back</button>
                <button type="submit" disabled={!form.level} className="btn-primary flex-1 justify-center disabled:opacity-40">Continue →</button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="font-serif text-xl font-bold text-gold-100 mb-6">Choose Your Plan</h2>
              <div className="space-y-3">
                {[
                  { name: 'Explorer', price: '€49/mo' },
                  { name: 'Scholar', price: '€99/mo' },
                  { name: 'Master', price: '€199/mo' },
                ].map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => setForm({ ...form, plan: p.name })}
                    className={`w-full flex justify-between items-center py-4 px-5 border transition-all font-body ${
                      form.plan === p.name
                        ? 'border-gold-400 bg-gold-400/10'
                        : 'border-gold-400/20 hover:border-gold-400/40'
                    }`}
                  >
                    <span className={`font-serif text-lg font-bold ${form.plan === p.name ? 'text-gold-400' : 'text-gold-100'}`}>{p.name}</span>
                    <span className="text-sm text-gold-100/60">{p.price}</span>
                  </button>
                ))}
              </div>
              <label className="flex items-start gap-3 cursor-pointer mt-4">
                <input type="checkbox" checked={form.agreeTerms} onChange={(e) => setForm({ ...form, agreeTerms: e.target.checked })}
                  className="mt-1 accent-yellow-400" />
                <span className="text-xs text-gold-100/50 font-body">
                  I agree to the <a href="#" className="text-gold-400 hover:underline">Terms of Service</a> and{' '}
                  <a href="#" className="text-gold-400 hover:underline">Privacy Policy</a>
                </span>
              </label>
              <div className="flex gap-4 mt-4">
                <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">← Back</button>
                <button type="submit" disabled={!form.plan || !form.agreeTerms} className="btn-primary flex-1 justify-center disabled:opacity-40">
                  Complete Enrollment
                </button>
              </div>
            </form>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="text-5xl mb-6">✦</div>
              <h2 className="font-serif text-2xl font-bold text-gold-100 mb-4">Welcome to E4!</h2>
              <p className="text-gold-100/55 font-body mb-8">
                Your enrollment is confirmed. Check your email for next steps and your student portal login details.
              </p>
              <Link to="/portal" className="btn-primary">Go to Student Portal</Link>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gold-100/40 font-body mt-6">
          Already a member?{' '}
          <Link to="/login" className="text-gold-400 hover:text-gold-300 transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
