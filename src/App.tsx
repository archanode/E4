import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Coaching from './pages/Coaching'
import Schedule from './pages/Schedule'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import StudentPortal from './pages/StudentPortal'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetail />} />
          <Route path="coaching" element={<Coaching />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="portal" element={<StudentPortal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
