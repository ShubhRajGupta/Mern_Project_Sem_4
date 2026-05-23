import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const SUBJECTS = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Economics']
const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8]

function Upload() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ title: '', subject: '', semester: '', description: '' })
  const [file, setFile]     = useState(null)
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }) }
  function handleFile(e) { setFile(e.target.files[0] || null) }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.title || !form.subject || !form.semester || !file) {
      setError('Essential metadata and document file are required.')
      return
    }
    try {
      setLoading(true)
      console.log('Upload:', form, file)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Deposit failed.')
    } finally { setLoading(false) }
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-10 border-b border-[var(--border)] pb-6">
        <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-[var(--accent-gold)]">
          Contribution
        </p>
        <h1 className="text-4xl font-serif text-[var(--accent)] mb-3">Deposit Academic Work</h1>
        <p className="text-[var(--ink-mid)] font-light">Submit course materials, research notes, or past papers to the repository.</p>
      </div>

      <Card className="p-8 md:p-12">
        {error && (
          <div className="mb-8 p-4 border border-red-200 bg-red-50 text-red-800 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Document Title */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-3">
              Document Title <span className="text-[var(--accent-gold)]">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Advanced Linear Algebra Notes"
              className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
            />
          </div>

          {/* Classification grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-3">
                Discipline <span className="text-[var(--accent-gold)]">*</span>
              </label>
              <select
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm appearance-none rounded-none"
              >
                <option value="">Select Discipline</option>
                {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-3">
                Semester <span className="text-[var(--accent-gold)]">*</span>
              </label>
              <select
                name="semester"
                value={form.semester}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm appearance-none rounded-none"
              >
                <option value="">Select Semester</option>
                {SEMESTERS.map((s) => <option key={s} value={s}>Semester {s}</option>)}
              </select>
            </div>
          </div>

          {/* Abstract / Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-3">
              Abstract / Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Brief summary of the document's contents..."
              className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm resize-none"
            />
          </div>

          {/* File Upload Zone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--ink-mid)] mb-3">
              Document File <span className="text-[var(--accent-gold)]">*</span>
            </label>
            <label
              className="flex flex-col items-center justify-center w-full border border-[var(--border)] border-dashed py-12 px-6 cursor-pointer bg-[var(--surface-2)] hover:bg-[var(--surface)] hover:border-[var(--accent-gold)] transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-[var(--border)] mb-4 group-hover:border-[var(--accent-gold)] transition-colors text-[var(--accent)] font-serif italic text-xl">
                D
              </div>
              {file ? (
                <span className="text-sm font-medium text-[var(--accent)] text-center">{file.name}</span>
              ) : (
                <div className="text-center">
                  <span className="block text-sm text-[var(--ink-mid)] mb-1">Click to select document</span>
                  <span className="block text-[10px] font-mono tracking-widest text-[var(--ink-muted)]">PDF, DOCX, PPTX (MAX 20MB)</span>
                </div>
              )}
              <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={handleFile} className="sr-only" />
            </label>
          </div>

          <div className="pt-6 border-t border-[var(--border)] flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 border border-[var(--border)] text-[var(--ink-mid)] text-sm tracking-wide hover:bg-[var(--surface-2)] hover:text-[var(--ink)] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[var(--accent)] text-white text-sm tracking-wide hover:bg-[var(--ink)] transition-colors disabled:opacity-50"
            >
              {loading ? 'Depositing...' : 'Submit Deposit'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Upload
