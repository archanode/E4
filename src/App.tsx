import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Coaching from './pages/Coaching'
import Schedule from './pages/Schedule'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import StudentPortal from './pages/StudentPortal'
import NotFound from './pages/NotFound'

// Route tree only. The router is supplied by main.tsx (BrowserRouter)
// or entry-server.tsx (StaticRouter) so the same tree renders in both.
function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="portal" element={<StudentPortal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
