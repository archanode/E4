import { Link } from 'react-router-dom'

// Rendered for unknown paths and unknown course ids.
// Prerendered to dist/404.html, which Netlify serves with status 404.
export default function NotFound() {
  return (
    <div className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label mb-4">Error 404</p>
          <h1 className="section-title mb-6">Page Not Found</h1>
          <div className="divider-gold mb-8" />
          <p className="text-gold-100/55 font-body mb-10">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">Home</Link>
            <Link to="/courses" className="btn-outline">Courses</Link>
            <Link to="/contact" className="btn-outline">Contact</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
