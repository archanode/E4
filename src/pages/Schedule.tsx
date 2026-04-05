const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const schedule = [
  { day: 'Monday', time: '09:00 – 10:30', title: 'Beginners Group', coach: 'FM Daniel Borg', format: 'In-Person', level: 'Beginner', spots: 4 },
  { day: 'Monday', time: '18:00 – 19:30', title: 'Tactics Workshop', coach: 'IM Carlos Rodrigues', format: 'Online', level: 'Intermediate', spots: 6 },
  { day: 'Tuesday', time: '19:00 – 20:30', title: 'Advanced Strategy', coach: 'GM Alexander Petrov', format: 'In-Person', level: 'Advanced', spots: 2 },
  { day: 'Wednesday', time: '09:00 – 10:00', title: 'Endgame Masterclass', coach: 'IM Sofia Marchetti', format: 'Online', level: 'Intermediate', spots: 5 },
  { day: 'Wednesday', time: '18:30 – 20:00', title: 'Opening Repertoire', coach: 'GM Alexander Petrov', format: 'In-Person', level: 'Advanced', spots: 0 },
  { day: 'Thursday', time: '10:00 – 11:30', title: 'Beginners Group', coach: 'FM Daniel Borg', format: 'In-Person', level: 'Beginner', spots: 6 },
  { day: 'Friday', time: '18:00 – 19:30', title: 'Positional Play', coach: 'IM Sofia Marchetti', format: 'In-Person', level: 'Intermediate', spots: 4 },
]

const levelColors: Record<string, string> = {
  Beginner: 'text-green-400 border-green-400/30',
  Intermediate: 'text-blue-400 border-blue-400/30',
  Advanced: 'text-purple-400 border-purple-400/30',
}

export default function Schedule() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label mb-4">Weekly Timetable</p>
          <h1 className="section-title mb-6">Class Schedule</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body">
            Browse our weekly sessions and find the perfect class for your level and schedule.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 px-6 border-b border-gold-400/15">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {Object.entries(levelColors).map(([level, cls]) => (
            <span key={level} className={`text-xs font-body border px-3 py-1 ${cls}`}>{level}</span>
          ))}
        </div>
      </section>

      {/* Schedule by day */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          {days.map((day) => {
            const daySessions = schedule.filter((s) => s.day === day)
            if (!daySessions.length) return null
            return (
              <div key={day}>
                <h2 className="font-serif text-2xl font-bold text-gold-400 mb-4 flex items-center gap-4">
                  {day}
                  <span className="flex-1 h-px bg-gold-400/15" />
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {daySessions.map((s, i) => (
                    <div key={i} className="card-luxury p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-body text-gold-400 text-sm font-bold">{s.time}</span>
                        <span className={`text-xs border px-2 py-0.5 font-body ${levelColors[s.level] || 'text-gold-400 border-gold-400/30'}`}>
                          {s.level}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-gold-100 mb-1">{s.title}</h3>
                      <p className="text-xs text-gold-100/50 font-body mb-1">{s.coach}</p>
                      <p className="text-xs text-gold-100/40 font-body mb-4">{s.format}</p>
                      <div className="flex justify-between items-center border-t border-gold-400/10 pt-4">
                        <span className={`text-xs font-body ${s.spots === 0 ? 'text-red-400' : 'text-green-400'}`}>
                          {s.spots === 0 ? 'Full' : `${s.spots} spots left`}
                        </span>
                        <button
                          disabled={s.spots === 0}
                          className={`text-xs font-body font-bold px-4 py-1.5 transition-colors ${
                            s.spots === 0
                              ? 'text-gold-100/20 border border-gold-100/10 cursor-not-allowed'
                              : 'border border-gold-400 text-gold-400 hover:bg-gold-400/10'
                          }`}
                        >
                          {s.spots === 0 ? 'Full' : 'Reserve'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 px-6 bg-dark-800 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold-100/50 font-body text-sm mb-4">
            Private coaching sessions are arranged directly with your assigned coach at mutually convenient times.
          </p>
          <a href="/coaching" className="btn-outline text-xs">View Private Coaching</a>
        </div>
      </section>
    </div>
  )
}
