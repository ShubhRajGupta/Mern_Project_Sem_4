import { Link, useNavigate } from 'react-router-dom'

// Navbar renders on every page inside Layout.
// Later: swap the hardcoded user state with auth context / token check.
function Navbar() {
  const navigate = useNavigate()

  // TODO: Replace with real auth state from context or localStorage
  const isLoggedIn = false

  function handleLogout() {
    // TODO: clear token, call /api/auth/logout
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            CR
          </div>
          <span className="font-semibold text-slate-800 tracking-tight text-base">
            College Resource Hub
          </span>
        </Link>

        {/* Right side actions */}
        <nav className="flex items-center gap-3">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/upload"
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Upload
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-slate-500 hover:text-red-500 transition-colors font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-slate-600 hover:text-indigo-600 transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
