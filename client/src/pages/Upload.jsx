import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

// TODO: connect to POST /api/resources (multipart/form-data) when backend is ready.
// Authorization header: Bearer <token from localStorage>

const SUBJECTS = ['CS', 'MATH', 'PHY', 'CHEM', 'ENG', 'ECO']
const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8]

function Upload() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    subject: '',
    semester: '',
    description: '',
  })
  const [file, setFile]     = useState(null)
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleFile(e) {
    setFile(e.target.files[0] || null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!form.title || !form.subject || !form.semester || !file) {
      setError('Please fill all required fields and select a file.')
      return
    }

    try {
      setLoading(true)

      // TODO: uncomment when backend is ready
      // const data = new FormData()
      // Object.entries(form).forEach(([k, v]) => data.append(k, v))
      // data.append('file', file)
      // const token = localStorage.getItem('token')
      // await axios.post(`${import.meta.env.VITE_API_URL}/api/resources`, data, {
      //   headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'multipart/form-data' },
      // })
      // navigate('/dashboard')

      console.log('Upload payload:', form, file)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl space-y-6">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Upload Resource</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Share notes, papers, or slides with your classmates.
        </p>
      </div>

      <Card>
        {error && (
          <div className="mb-5 bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Title */}
          <div>
            <label htmlFor="upload-title" className="block text-sm font-medium text-slate-700 mb-1.5">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              id="upload-title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Data Structures Unit 2 Notes"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          {/* Subject + Semester row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="upload-subject" className="block text-sm font-medium text-slate-700 mb-1.5">
                Subject <span className="text-red-400">*</span>
              </label>
              <select
                id="upload-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
              >
                <option value="">Select</option>
                {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="upload-semester" className="block text-sm font-medium text-slate-700 mb-1.5">
                Semester <span className="text-red-400">*</span>
              </label>
              <select
                id="upload-semester"
                name="semester"
                value={form.semester}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white"
              >
                <option value="">Select</option>
                {SEMESTERS.map((s) => <option key={s} value={s}>Semester {s}</option>)}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="upload-desc" className="block text-sm font-medium text-slate-700 mb-1.5">
              Description <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="upload-desc"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Brief description of what this resource covers…"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* File picker */}
          <div>
            <label htmlFor="upload-file" className="block text-sm font-medium text-slate-700 mb-1.5">
              File <span className="text-red-400">*</span>
            </label>
            <label
              htmlFor="upload-file"
              className="flex flex-col items-center justify-center w-full border-2 border-dashed border-slate-200 rounded-lg py-8 px-4 cursor-pointer hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-2xl mb-2">📎</span>
              {file ? (
                <span className="text-sm font-medium text-indigo-600">{file.name}</span>
              ) : (
                <>
                  <span className="text-sm text-slate-500">Click to select a file</span>
                  <span className="text-xs text-slate-400 mt-1">PDF, DOCX, PPTX — max 20 MB</span>
                </>
              )}
              <input
                id="upload-file"
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                onChange={handleFile}
                className="sr-only"
              />
            </label>
          </div>

          <button
            id="upload-submit"
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-60"
          >
            {loading ? 'Uploading…' : 'Upload Resource'}
          </button>
        </form>
      </Card>
    </div>
  )
}

export default Upload
