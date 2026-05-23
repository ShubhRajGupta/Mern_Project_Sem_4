import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] flex flex-col font-sans selection:bg-[var(--accent-gold)] selection:text-white">
      <Navbar />
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-12 flex gap-12">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
