import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Library from './pages/Library'
import Upload from './pages/Upload'
import ResourceDetail from './pages/ResourceDetail'

// App.jsx is the single source of truth for routing.
// All routes are declared here so navigation is easy to trace and modify.
function App() {
  return (
    <Routes>
      {/* Public routes — no layout wrapper */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* App routes — wrapped in shared Layout (Navbar + Sidebar) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/resource/:id" element={<ResourceDetail />} />
      </Route>
    </Routes>
  )
}

export default App
