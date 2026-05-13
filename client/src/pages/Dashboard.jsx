import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const SAMPLE_RESOURCES = [
  { _id: '1', title: 'Advanced Data Structures Compendium', subject: 'CS', sem: 3, type: 'PDF', by: 'Rahul S.', date: 'Oct 2025', color: 'from-blue-500/10' },
  { _id: '2', title: 'Database Systems Architecture & Normalization', subject: 'CS', sem: 4, type: 'PDF', by: 'Priya M.', date: 'Nov 2025', color: 'from-indigo-500/10' },
  { _id: '3', title: 'Applied Mathematics II: Fourier Series', subject: 'MATH', sem: 2, type: 'PPTX', by: 'Aryan K.', date: 'Sep 2025', color: 'from-amber-500/10' },
  { _id: '4', title: 'Operating Systems Principles: Memory Management', subject: 'CS', sem: 5, type: 'PDF', by: 'Sneha L.', date: 'Dec 2025', color: 'from-blue-500/10' },
  { _id: '5', title: 'Classical Mechanics Laboratory Manual', subject: 'PHY', sem: 1, type: 'DOCX', by: 'Dev P.', date: 'Aug 2025', color: 'from-emerald-500/10' },
  { _id: '6', title: 'Network Protocols Packet Analysis (Wireshark)', subject: 'CS', sem: 5, type: 'PDF', by: 'Nisha R.', date: 'Jan 2026', color: 'from-blue-500/10' },
  { _id: '7', title: 'Quantum Mechanics: Wave Functions', subject: 'PHY', sem: 4, type: 'PDF', by: 'Anjali T.', date: 'Feb 2026', color: 'from-emerald-500/10' },
  { _id: '8', title: 'Macroeconomics: Fiscal Policy Notes', subject: 'ECON', sem: 3, type: 'DOCX', by: 'Vikram B.', date: 'Mar 2026', color: 'from-rose-500/10' },
  { _id: '9', title: 'Linear Algebra: Eigenvalues and Eigenvectors', subject: 'MATH', sem: 2, type: 'PDF', by: 'Rohan D.', date: 'Apr 2026', color: 'from-amber-500/10' },
  { _id: '10', title: 'Machine Learning: Neural Networks Slides', subject: 'CS', sem: 6, type: 'PPTX', by: 'Siddharth V.', date: 'May 2026', color: 'from-indigo-500/10' },
  { _id: '11', title: 'Thermodynamics Laws & Entropy', subject: 'PHY', sem: 3, type: 'PDF', by: 'Karan M.', date: 'Jun 2026', color: 'from-emerald-500/10' },
  { _id: '12', title: 'Software Engineering Agile Frameworks', subject: 'CS', sem: 5, type: 'DOCX', by: 'Pooja J.', date: 'Jul 2026', color: 'from-blue-500/10' },
  { _id: '13', title: 'Probability and Statistics Exam Solutions', subject: 'MATH', sem: 4, type: 'PDF', by: 'Neha S.', date: 'Aug 2026', color: 'from-amber-500/10' },
  { _id: '14', title: 'Financial Accounting Fundamentals', subject: 'ECON', sem: 1, type: 'PPTX', by: 'Amit R.', date: 'Sep 2026', color: 'from-rose-500/10' },
  { _id: '15', title: 'Computer Architecture RISC vs CISC', subject: 'CS', sem: 4, type: 'PDF', by: 'Gaurav K.', date: 'Oct 2026', color: 'from-indigo-500/10' },
  { _id: '16', title: 'Differential Equations Boundary Value Problems', subject: 'MATH', sem: 3, type: 'DOCX', by: 'Divya P.', date: 'Nov 2026', color: 'from-amber-500/10' },
  { _id: '17', title: 'Electromagnetism Maxwell Equations', subject: 'PHY', sem: 5, type: 'PDF', by: 'Tarun B.', date: 'Dec 2026', color: 'from-emerald-500/10' },
  { _id: '18', title: 'Compiler Design Lexical Analysis', subject: 'CS', sem: 6, type: 'PPTX', by: 'Shruti M.', date: 'Jan 2027', color: 'from-blue-500/10' }
]

const SUBJECTS = ['All', 'CS', 'MATH', 'PHY', 'ECON']

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
                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--accent-gold)] transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-10"></div>
                
                <div className="-mx-8 -mt-8 mb-6 h-40 relative overflow-hidden bg-[var(--surface-2)] border-b border-[var(--border)]">
                  <img src="/assets/doc_thumbnail.png" alt="Document cover" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${resource.color || 'from-white'} via-white/20 to-transparent`}></div>
                </div>
                
                <div className="flex items-center justify-between mb-6 relative z-10">
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
