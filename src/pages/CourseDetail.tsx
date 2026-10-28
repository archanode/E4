import { useParams, Link } from 'react-router-dom'
import { findCourse } from '../data/courses'
import NotFound from './NotFound'

export default function CourseDetail() {
  const { id } = useParams()
  const course = findCourse(id)

  // Unknown course ids render the 404 page (no prerendered file exists for them,
  // so Netlify also answers with status 404).
  if (!course) return <NotFound />

  const facts = [
    { label: 'Duration', value: course.duration },
    { label: 'Lessons', value: course.lessons },
    { label: 'Price', value: course.price },
    { label: 'Format', value: course.format },
    { label: 'Age Group', value: course.ageGroup },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-dark-800 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-6xl opacity-50 block mb-4">{course.icon}</span>
          <p className="section-label mb-4">{course.level}</p>
          <h1 className="section-title mb-6">{course.title}</h1>
          <div className="divider-gold mb-6" />
          <p className="text-gold-100/55 font-body leading-relaxed">{course.desc}</p>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          {facts.map((f) => (
            <div key={f.label} className="card-luxury p-6 text-center">
              <span className="text-xs text-gold-400 uppercase tracking-widest font-body block mb-2">{f.label}</span>
              <span className="text-sm text-gold-100/70 font-body">{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-6 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-4">Curriculum</p>
            <h2 className="section-title mb-4">What You Will Learn</h2>
            <div className="divider-gold" />
          </div>
          <ul className="card-luxury p-8 space-y-3">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-gold-100/65 font-body">
                <span className="text-gold-400 shrink-0 mt-0.5">✦</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="section-label mb-4">Not Sure Where to Start?</p>
          <h2 className="section-title mb-6">Book a Free First Lesson</h2>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-8 leading-relaxed">
            Your first lesson is on us. We'll get to know your level and find the perfect program for your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">Book a Free First Lesson</Link>
            <Link to="/courses" className="btn-outline">Back to Courses</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
