import { Link, NavLink, useNavigate } from 'react-router-dom'

// Navbar: Elegant, minimal, glassmorphic backdrop
function Navbar() {
  const navigate = useNavigate()
  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 glass-card border-b-0 border-b-[var(--border)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Wordmark */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center border border-[var(--ink)] text-[var(--ink)] font-serif font-bold text-lg transition-colors group-hover:bg-[var(--ink)] group-hover:text-[var(--surface)]">
            R
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight text-[var(--accent)]">
            Resourcely<span className="text-[var(--accent-gold)]">.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors ${isActive ? 'text-[var(--ink)] font-medium' : 'text-[var(--ink-mid)] hover:text-[var(--accent-gold)]'}`
                }
              >
                Collection
              </NavLink>
              <NavLink
                to="/upload"
                className="text-sm tracking-wide text-[var(--ink-mid)] hover:text-[var(--accent-gold)] transition-colors"
              >
                Contribute
              </NavLink>
              <div className="w-px h-4 bg-[var(--border)] mx-2"></div>
              <button
                onClick={() => navigate('/login')}
                className="text-sm tracking-wide text-[var(--ink-muted)] hover:text-red-800 transition-colors"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm tracking-wide text-[var(--ink-mid)] hover:text-[var(--accent-gold)] transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 text-sm tracking-wide bg-[var(--accent)] text-white hover:bg-[var(--ink)] transition-colors duration-300"
              >
                Join the Archive
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
