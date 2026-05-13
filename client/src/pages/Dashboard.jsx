import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const SAMPLE_RESOURCES = [
  { _id: '1', title: 'Data Structures Notes',    subject: 'CS',  semester: 3, type: 'PDF',  uploadedBy: 'Rahul S.' },
  { _id: '2', title: 'DBMS Past Papers',          subject: 'CS',  semester: 4, type: 'PDF',  uploadedBy: 'Priya M.' },
  { _id: '3', title: 'Engineering Maths Slides',  subject: 'MATH',semester: 2, type: 'PPTX', uploadedBy: 'Aryan K.' },
  { _id: '4', title: 'OS Concepts Cheat Sheet',   subject: 'CS',  semester: 5, type: 'PDF',  uploadedBy: 'Sneha L.' },
  { _id: '5', title: 'Physics Lab Manual',         subject: 'PHY', semester: 1, type: 'DOCX', uploadedBy: 'Dev P.'   },
  { _id: '6', title: 'Computer Networks Notes',   subject: 'CS',  semester: 5, type: 'PDF',  uploadedBy: 'Nisha R.' },
]

const SUBJECTS = ['All', 'CS', 'MATH', 'PHY']

const typeBadge = {
  PDF:  'bg-red-50 text-red-600',
  PPTX: 'bg-orange-50 text-orange-600',
  DOCX: 'bg-blue-50 text-blue-600',
}

function Dashboard() {
  const [search, setSearch]   = useState('')
  const [subject, setSubject] = useState('All')

  // TODO: replace with useEffect + axios.get('/api/resources?subject=&search=')
  const filtered = SAMPLE_RESOURCES.filter((r) => {
    const matchSubject = subject === 'All' || r.subject === subject
    const matchSearch  = r.title.toLowerCase().includes(search.toLowerCase())
    return matchSubject && matchSearch
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">Browse all shared resources</p>
        </div>
        <Link
          to="/upload"
          id="dashboard-upload-btn"
          className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          + Upload
        </Link>
      </div>

      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="dashboard-search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources…"
            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <div className="flex items-center gap-2">
            {SUBJECTS.map((s) => (
              <button
                key={s}
                id={`filter-${s.toLowerCase()}`}
                onClick={() => setSubject(s)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  subject === s
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          No resources found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((resource) => (
            <Link key={resource._id} to={`/resource/${resource._id}`} className="block group">
              <Card className="hover:shadow-md transition-shadow h-full">
                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${typeBadge[resource.type] || 'bg-slate-100 text-slate-600'}`}>
                  {resource.type}
                </span>
                <h2 className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug mb-2">
                  {resource.title}
                </h2>
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <span className="text-xs text-slate-400">Sem {resource.semester} · {resource.subject}</span>
                  <span className="text-xs text-slate-400">{resource.uploadedBy}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard
