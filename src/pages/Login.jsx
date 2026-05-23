import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.email || !form.password) { setError('Both fields are required.'); return }
    try {
      setLoading(true)
      console.log('Login:', form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed.')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)] p-6 font-sans">
      <div className="w-full max-w-md bg-white p-10 border border-[var(--border)] shadow-[0_20px_60px_rgb(0,0,0,0.03)]">
        
        <div className="mb-12 text-center">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] font-serif font-bold text-2xl mb-6 hover:bg-[var(--accent)] hover:text-white transition-colors">
            R
          </Link>
          <h1 className="text-3xl font-serif text-[var(--accent)] mb-2">Researcher Portal</h1>
          <p className="text-[var(--ink-muted)] text-sm font-light">Access the academic archive.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-red-200 bg-red-50 text-red-800 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-2">
              Institution Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-2">
              Passphrase
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[var(--border)] bg-[var(--surface)] text-[var(--ink)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[var(--accent)] text-white text-sm tracking-wide font-medium hover:bg-[var(--ink)] transition-colors disabled:opacity-50 mt-4"
          >
            {loading ? 'Authenticating...' : 'Authenticate'}
          </button>
        </form>

        <div className="mt-8 text-center pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--ink-muted)]">
            Require access? <Link to="/register" className="text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors font-medium ml-1">Submit Application</Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login
