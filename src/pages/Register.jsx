import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [form, setForm]       = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.password || !form.confirmPassword) { setError('All fields are required.'); return }
    if (form.password !== form.confirmPassword) { setError("Passphrases do not match."); return }
    if (form.password.length < 6) { setError('Passphrase must be at least 6 characters.'); return }
    try {
      setLoading(true)
      console.log('Register:', form)
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex bg-[var(--surface)] font-sans">
      
      {/* Visual / Manifesto Side */}
      <div className="hidden lg:flex w-5/12 bg-[var(--accent)] p-16 flex-col justify-between text-white relative overflow-hidden">
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center justify-center w-12 h-12 border border-white text-white font-serif font-bold text-2xl hover:bg-white hover:text-[var(--accent)] transition-colors">
            R
          </Link>
        </div>
        
        <div className="relative z-10 max-w-sm">
          <h2 className="font-serif text-4xl mb-6 leading-snug">
            Knowledge grows when it is shared freely.
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-sm">
            Join a collective of students and scholars dedicated to open-source academia. Upload your notes, access past materials, and contribute to the repository.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
        <div className="absolute -right-10 -bottom-10 w-[400px] h-[400px] border border-white/5 rounded-full"></div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          
          <div className="mb-10 lg:hidden">
            <Link to="/" className="inline-flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] font-serif font-bold text-2xl">
              R
            </Link>
          </div>

          <h1 className="text-3xl font-serif text-[var(--accent)] mb-2">Join the Archive</h1>
          <p className="text-[var(--ink-muted)] text-sm font-light mb-10">Establish your academic credentials.</p>

          {error && (
            <div className="mb-6 p-4 border border-red-200 bg-red-50 text-red-800 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {[
              { id: 'reg-name', name: 'name', label: 'Full Name', type: 'text' },
              { id: 'reg-email', name: 'email', label: 'Institution Email', type: 'email' },
              { id: 'reg-pass', name: 'password', label: 'Passphrase', type: 'password' },
              { id: 'reg-confirm', name: 'confirmPassword', label: 'Confirm Passphrase', type: 'password' },
            ].map(({ id, name, label, type }) => (
              <div key={id}>
                <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-2">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--border)] bg-white text-[var(--ink)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[var(--accent)] text-white text-sm tracking-wide font-medium hover:bg-[var(--ink)] transition-colors disabled:opacity-50 mt-6"
            >
              {loading ? 'Processing...' : 'Submit Application'}
            </button>
          </form>

          <p className="text-xs mt-8 text-[var(--ink-muted)]">
            Already registered? <Link to="/login" className="text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors font-medium ml-1">Access Portal</Link>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Register
