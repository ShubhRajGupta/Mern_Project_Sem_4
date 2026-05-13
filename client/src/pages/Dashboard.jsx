import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const SAMPLE_RESOURCES = [
  { _id: '1', title: 'Data Structures Compendium', subject: 'CS', sem: 3, type: 'PDF', by: 'Rahul S.', date: 'Oct 2025' },
  { _id: '2', title: 'Database Systems Architecture', subject: 'CS', sem: 4, type: 'PDF', by: 'Priya M.', date: 'Nov 2025' },
  { _id: '3', title: 'Applied Mathematics II', subject: 'MATH', sem: 2, type: 'PPTX', by: 'Aryan K.', date: 'Sep 2025' },
  { _id: '4', title: 'Operating Systems Principles', subject: 'CS', sem: 5, type: 'PDF', by: 'Sneha L.', date: 'Dec 2025' },
  { _id: '5', title: 'Classical Mechanics Laboratory', subject: 'PHY', sem: 1, type: 'DOCX', by: 'Dev P.', date: 'Aug 2025' },
  { _id: '6', title: 'Network Protocols Analysis', subject: 'CS', sem: 5, type: 'PDF', by: 'Nisha R.', date: 'Jan 2026' },
]

const SUBJECTS = ['All', 'CS', 'MATH', 'PHY']

function Dashboard() {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')

  const filtered = SAMPLE_RESOURCES.filter((r) => {
    const matchSubject = subject === 'All' || r.subject === subject
    const matchSearch  = r.title.toLowerCase().includes(search.toLowerCase())
    return matchSubject && matchSearch
  })

  return (
    <div className="space-y-12">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-[var(--accent-gold)]">
            Repository
          </p>
          <h1 className="text-4xl font-serif text-[var(--accent)]">Library Catalog</h1>
        </div>
        <Link
          to="/upload"
          className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--accent)] text-white text-sm tracking-wide hover:bg-[var(--ink)] transition-colors"
        >
          Deposit Document
        </Link>
      </div>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, or keyword..."
            className="w-full px-4 py-3 bg-white border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors placeholder:text-[var(--ink-muted)]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`px-5 py-3 text-xs tracking-wider uppercase transition-colors border ${
                subject === s
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                  : 'border-[var(--border)] bg-white text-[var(--ink-mid)] hover:border-[var(--accent-gold)] hover:text-[var(--accent)]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center border border-[var(--border)] bg-white border-dashed">
          <p className="font-serif text-xl text-[var(--ink-muted)]">No documents match your inquiry.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <Link key={resource._id} to={`/resource/${resource._id}`} className="group block h-full">
              <Card className="h-full p-8 flex flex-col relative overflow-hidden">
                {/* Decorative subtle accent line on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-gold)] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[var(--ink-muted)] border border-[var(--border)] px-2 py-1 bg-[var(--surface)]">
                    {resource.type}
                  </span>
                  <span className="text-xs text-[var(--ink-muted)]">{resource.date}</span>
                </div>
                
                <h2 className="font-serif text-xl text-[var(--accent)] mb-4 leading-snug group-hover:text-[var(--accent-gold)] transition-colors">
                  {resource.title}
                </h2>
                
                <div className="mt-auto pt-6 border-t border-[var(--border)] flex justify-between items-center text-xs text-[var(--ink-mid)]">
                  <span>Sem {resource.sem} · {resource.subject}</span>
                  <span className="font-medium">{resource.by}</span>
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
