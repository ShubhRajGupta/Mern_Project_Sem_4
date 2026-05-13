import { NavLink } from 'react-router-dom'

// Sidebar shows only on dashboard-style pages (inside Layout).
// NavLink gives automatic "active" class for the current route.
const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/upload',    label: 'Upload',    icon: '⬆️' },
]

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 min-h-full bg-white border-r border-slate-100 py-6 px-3 gap-1 shrink-0">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest px-3 mb-2">
        Menu
      </p>
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`
          }
        >
          <span className="text-base leading-none">{icon}</span>
          {label}
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar
