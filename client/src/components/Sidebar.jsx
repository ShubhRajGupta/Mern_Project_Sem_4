import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Library Catalog' },
  { to: '/upload',    label: 'Deposit Work' },
]

const subjects = [
  'Computer Science', 
  'Mathematics', 
  'Physics', 
  'Economics',
  'Literature',
  'Engineering'
]

function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 pr-8 border-r border-[var(--border)]">
      <div className="mb-8">
        <p className="text-[11px] font-medium uppercase tracking-widest mb-4 text-[var(--ink-muted)]">
          Repository
        </p>
        <div className="flex flex-col gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2.5 text-sm transition-all duration-300 ${
                  isActive
                    ? 'text-[var(--accent)] font-medium border-l-2 border-[var(--accent-gold)] bg-[var(--surface-2)]'
                    : 'text-[var(--ink-mid)] border-l-2 border-transparent hover:text-[var(--accent)] hover:border-[var(--border)]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[11px] font-medium uppercase tracking-widest mb-4 text-[var(--ink-muted)]">
          Disciplines
        </p>
        <div className="flex flex-col gap-1">
          {subjects.map((s) => (
            <button
              key={s}
              className="text-left px-4 py-2 text-sm text-[var(--ink-mid)] transition-colors hover:text-[var(--accent)] hover:bg-[var(--surface-2)]"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
