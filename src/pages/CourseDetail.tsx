import { useParams, Link } from 'react-router-dom'

export default function CourseDetail() {
  const { id } = useParams()

  return (
    <div className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Program Details</p>
          <h1 className="section-title mb-6 capitalize">{id?.replace(/-/g, ' ')}</h1>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-10">
            Full course details coming soon. Contact us for more information or to enroll directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-primary">Enroll Now</Link>
            <Link to="/courses" className="btn-outline">Back to Courses</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
