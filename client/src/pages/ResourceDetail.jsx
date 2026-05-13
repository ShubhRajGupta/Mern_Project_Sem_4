import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'

const SAMPLE_RESOURCES = [
  { _id: '1', title: 'Data Structures Compendium', subject: 'Computer Science', sem: 3, type: 'PDF', by: 'Rahul Sharma', description: 'Comprehensive analysis of fundamental data structures including balanced trees, hash tables, and graph representations with algorithmic complexity proofs.', date: 'October 12, 2025', downloads: 142, size: '2.4 MB' },
  { _id: '2', title: 'Database Systems Architecture', subject: 'Computer Science', sem: 4, type: 'PDF', by: 'Priya M.', description: 'Notes on relational calculus, normalization forms, and ACID properties.', date: 'November 4, 2025', downloads: 88, size: '1.1 MB' }
]

function ResourceDetail() {
  const { id } = useParams()
  // Mock finding resource, default to first if ID not found in mock array for preview purposes
  const resource = SAMPLE_RESOURCES.find((r) => r._id === id) || SAMPLE_RESOURCES[0]

  if (!resource) {
    return (
      <div className="py-32 text-center">
        <p className="font-serif text-2xl text-[var(--ink-muted)] mb-6">Document not found in archive.</p>
        <Link to="/dashboard" className="text-sm tracking-wide border-b border-[var(--accent)] text-[var(--accent)] pb-1">
          Return to Catalog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* ── Breadcrumb ──────────────────────────────────────────────── */}
      <div className="mb-12">
        <Link to="/dashboard" className="text-xs uppercase tracking-widest text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2">
          <span>&larr;</span> Back to Catalog
        </Link>
      </div>

      {/* ── Main Document View ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Metadata & Actions (1/3 width) */}
        <div className="lg:col-span-1 space-y-8">
          <Card className="p-6">
            <div className="mb-6 flex items-center justify-between">
              <div className="w-10 h-10 bg-[var(--surface-2)] flex items-center justify-center font-serif text-[var(--accent)]">
                {resource.type}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[var(--ink-muted)]">
                {resource.size}
              </span>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)] mb-1">Author / Depositor</p>
                <p className="text-sm font-medium text-[var(--accent)]">{resource.by}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)] mb-1">Discipline</p>
                <p className="text-sm text-[var(--ink-mid)]">{resource.subject} (Sem {resource.sem})</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)] mb-1">Deposit Date</p>
                <p className="text-sm text-[var(--ink-mid)]">{resource.date}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)] mb-1">Access Count</p>
                <p className="text-sm text-[var(--ink-mid)]">{resource.downloads} downloads</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={() => alert('Downloading...')} className="w-full py-3 bg-[var(--accent)] text-white text-sm tracking-wide hover:bg-[var(--ink)] transition-colors">
                Download Document
              </button>
              <button className="w-full py-3 border border-[var(--border)] text-[var(--accent)] text-sm tracking-wide hover:bg-[var(--surface-2)] transition-colors">
                Cite Source
              </button>
            </div>
          </Card>
        </div>

        {/* Right Column: Title & Abstract (2/3 width) */}
        <div className="lg:col-span-2">
          <div className="mb-10 pb-10 border-b border-[var(--border)]">
            <h1 className="text-4xl md:text-5xl font-serif text-[var(--accent)] leading-snug mb-6">
              {resource.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[var(--ink-muted)] font-mono">
              <span>ID: {resource._id.padStart(6, '0')}</span>
              <span>•</span>
              <span>OPEN ACCESS</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-[var(--accent-gold)] mb-4 font-semibold">Abstract</h3>
            <p className="text-[var(--ink-mid)] leading-relaxed font-light text-lg">
              {resource.description || "No abstract provided by the depositor."}
            </p>
          </div>
          
          <div className="mt-16 bg-[var(--surface-2)] p-8 border border-[var(--border)]">
            <h3 className="text-sm font-serif text-[var(--accent)] mb-2">Document Preview</h3>
            <p className="text-xs text-[var(--ink-muted)] mb-6">A limited preview of the document is available below.</p>
            <div className="aspect-[1/1.4] w-full bg-white border border-[var(--border)] relative overflow-hidden">
              <img src="/assets/doc_thumbnail.png" alt="Document Preview" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResourceDetail
