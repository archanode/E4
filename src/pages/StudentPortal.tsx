import { Link } from 'react-router-dom'

const enrolledCourses = [
  { title: 'Tactical Mastery', progress: 65, nextLesson: 'Lesson 16: The Windmill', coach: 'IM Carlos Rodrigues', nextDate: 'Mon, Mar 23' },
  { title: 'Endgame Masterclass', progress: 30, nextLesson: 'Lesson 8: Rook Endgames', coach: 'IM Sofia Marchetti', nextDate: 'Wed, Mar 25' },
]

const upcomingSessions = [
  { title: 'Tactics Workshop', date: 'Monday, Mar 23', time: '18:00 – 19:30', coach: 'IM Carlos Rodrigues', format: 'Online' },
  { title: 'Endgame Masterclass', date: 'Wednesday, Mar 25', time: '09:00 – 10:00', coach: 'IM Sofia Marchetti', format: 'Online' },
  { title: 'Tactics Workshop', date: 'Monday, Mar 30', time: '18:00 – 19:30', coach: 'IM Carlos Rodrigues', format: 'Online' },
]

const recentGames = [
  { opponent: 'Marco V.', result: 'Win', date: 'Mar 15', rating: '+8' },
  { opponent: 'Luke M.', result: 'Loss', date: 'Mar 12', rating: '-5' },
  { opponent: 'Anna K.', result: 'Win', date: 'Mar 9', rating: '+10' },
  { opponent: 'Tom B.', result: 'Draw', date: 'Mar 6', rating: '+1' },
]

export default function StudentPortal() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="bg-dark-800 border-b border-gold-400/15 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>
            <p className="section-label mb-1">Welcome back</p>
            <h1 className="font-serif text-3xl font-bold text-gold-100">Student Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-serif text-lg font-bold text-gold-100">John Doe</p>
              <p className="text-xs text-gold-400/60 font-body">Scholar Plan · Rating: 1450</p>
            </div>
            <div className="w-12 h-12 border border-gold-400/30 flex items-center justify-center bg-dark-700">
              <span className="text-gold-400/50 text-xl">♞</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Lessons Completed', value: '24', icon: '📚' },
            { label: 'Current Rating', value: '1,450', icon: '📈' },
            { label: 'Sessions This Month', value: '6', icon: '🗓️' },
            { label: 'Puzzles Solved', value: '312', icon: '♟' },
          ].map((s) => (
            <div key={s.label} className="card-luxury p-5 text-center">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="font-serif text-2xl font-bold gold-gradient mb-1">{s.value}</div>
              <div className="text-xs text-gold-100/45 font-body">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-xl font-bold text-gold-100 mb-5 flex items-center gap-3">
                My Courses
                <Link to="/courses" className="text-xs text-gold-400 font-body font-normal hover:underline ml-auto">Browse more</Link>
              </h2>
              <div className="space-y-4">
                {enrolledCourses.map((c) => (
                  <div key={c.title} className="card-luxury p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-gold-100">{c.title}</h3>
                        <p className="text-xs text-gold-100/45 font-body">{c.coach}</p>
                      </div>
                      <span className="text-sm font-bold gold-gradient font-body">{c.progress}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 bg-dark-600 mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-gold-500 to-gold-400"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gold-400/60 font-body">Next: {c.nextLesson}</p>
                        <p className="text-xs text-gold-100/35 font-body">{c.nextDate}</p>
                      </div>
                      <button className="btn-primary text-xs py-2 px-4">Continue</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div>
              <h2 className="font-serif text-xl font-bold text-gold-100 mb-5 flex items-center gap-3">
                Upcoming Sessions
                <Link to="/schedule" className="text-xs text-gold-400 font-body font-normal hover:underline ml-auto">Full schedule</Link>
              </h2>
              <div className="space-y-3">
                {upcomingSessions.map((s, i) => (
                  <div key={i} className="card-luxury p-5 flex flex-wrap justify-between items-center gap-4">
                    <div className="flex gap-4 items-center">
                      <div className="text-center w-12">
                        <div className="text-xs text-gold-400 font-body uppercase tracking-wide">{s.date.split(',')[0]}</div>
                        <div className="font-serif text-lg font-bold text-gold-100">{s.date.split(' ')[1]}</div>
                      </div>
                      <div className="w-px h-10 bg-gold-400/15" />
                      <div>
                        <p className="font-body font-bold text-gold-100 text-sm">{s.title}</p>
                        <p className="text-xs text-gold-100/45 font-body">{s.time} · {s.coach} · {s.format}</p>
                      </div>
                    </div>
                    <button className="btn-outline text-xs py-1.5 px-4">Join</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Games */}
            <div className="card-luxury p-6">
              <h2 className="font-serif text-lg font-bold text-gold-100 mb-5">Recent Games</h2>
              <div className="space-y-3">
                {recentGames.map((g, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gold-400/10 last:border-0">
                    <div>
                      <p className="text-sm font-body text-gold-100/70">vs {g.opponent}</p>
                      <p className="text-xs text-gold-100/35 font-body">{g.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`text-sm font-bold font-body ${g.result === 'Win' ? 'text-green-400' : g.result === 'Loss' ? 'text-red-400' : 'text-gold-400'}`}>
                        {g.result}
                      </span>
                      <p className={`text-xs font-body ${g.rating.startsWith('+') ? 'text-green-400' : g.rating.startsWith('-') ? 'text-red-400' : 'text-gold-100/40'}`}>
                        {g.rating}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-outline text-xs w-full mt-4">Submit a Game</button>
            </div>

            {/* Quick Actions */}
            <div className="card-luxury p-6">
              <h2 className="font-serif text-lg font-bold text-gold-100 mb-5">Quick Actions</h2>
              <div className="space-y-2">
                {[
                  { label: 'Book a Session', to: '/coaching' },
                  { label: 'Browse Courses', to: '/courses' },
                  { label: 'View Schedule', to: '/schedule' },
                  { label: 'Tournament Entry', to: '/tournaments' },
                  { label: 'Contact a Coach', to: '/contact' },
                ].map((a) => (
                  <Link
                    key={a.label}
                    to={a.to}
                    className="flex justify-between items-center py-2.5 px-4 border border-gold-400/15 text-sm font-body text-gold-100/65 hover:text-gold-400 hover:border-gold-400/35 transition-all"
                  >
                    {a.label}
                    <span className="text-gold-400/50">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
