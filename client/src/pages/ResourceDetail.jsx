import { useParams, Link } from 'react-router-dom'
import Card from '../components/Card'

// Placeholder data mirrors Dashboard — replace with:
// useEffect(() => axios.get(`/api/resources/${id}`), [id])
const SAMPLE_RESOURCES = [
  { _id: '1', title: 'Data Structures Notes',    subject: 'CS',  semester: 3, type: 'PDF',  uploadedBy: 'Rahul S.',  description: 'Complete unit 1–3 notes covering arrays, linked lists, stacks, queues, and trees with examples.', uploadedAt: '2025-03-10', downloads: 42 },
  { _id: '2', title: 'DBMS Past Papers',          subject: 'CS',  semester: 4, type: 'PDF',  uploadedBy: 'Priya M.',  description: 'Last 5 years question papers with model answers for DBMS end-semester exam.', uploadedAt: '2025-04-01', downloads: 88 },
  { _id: '3', title: 'Engineering Maths Slides',  subject: 'MATH',semester: 2, type: 'PPTX', uploadedBy: 'Aryan K.',  description: 'Slides covering Fourier series, Laplace transforms, and differential equations.', uploadedAt: '2025-02-18', downloads: 31 },
  { _id: '4', title: 'OS Concepts Cheat Sheet',   subject: 'CS',  semester: 5, type: 'PDF',  uploadedBy: 'Sneha L.',  description: 'One-page quick reference for OS scheduling algorithms, memory management, and IPC.', uploadedAt: '2025-05-02', downloads: 67 },
  { _id: '5', title: 'Physics Lab Manual',         subject: 'PHY', semester: 1, type: 'DOCX', uploadedBy: 'Dev P.',    description: 'Official lab manual with all 10 experiments, observations table, and result format.', uploadedAt: '2025-01-15', downloads: 55 },
  { _id: '6', title: 'Computer Networks Notes',   subject: 'CS',  semester: 5, type: 'PDF',  uploadedBy: 'Nisha R.',  description: 'Detailed notes on OSI model, TCP/IP, routing protocols, and socket programming.', uploadedAt: '2025-05-05', downloads: 39 },
]

const typeBadge = {
  PDF:  'bg-red-50 text-red-600',
  PPTX: 'bg-orange-50 text-orange-600',
  DOCX: 'bg-blue-50 text-blue-600',
}

function ResourceDetail() {
  const { id } = useParams()

  // TODO: replace with real fetch
  // const [resource, setResource] = useState(null)
  // useEffect(() => { axios.get(`/api/resources/${id}`).then(r => setResource(r.data)) }, [id])

  const resource = SAMPLE_RESOURCES.find((r) => r._id === id)

  if (!resource) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-400 text-sm mb-4">Resource not found.</p>
        <Link to="/dashboard" className="text-indigo-600 text-sm font-medium hover:underline">
          ← Back to Dashboard
        </Link>
      </div>
    )
  }

  function handleDownload() {
    // TODO: axios.get(`/api/resources/${id}/download`, { responseType: 'blob' })
    //       then trigger browser download via URL.createObjectURL
    alert('Download will connect to backend.')
  }

  return (
    <div className="max-w-2xl space-y-6">
      {/* Breadcrumb */}
      <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 transition-colors">
        ← Back to Dashboard
      </Link>

      {/* Main card */}
      <Card>
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeBadge[resource.type] || 'bg-slate-100 text-slate-600'}`}>
            {resource.type}
          </span>
          <span className="text-xs text-slate-400">{resource.downloads} downloads</span>
        </div>

        <h1 className="text-xl font-bold text-slate-900 mb-2">{resource.title}</h1>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">{resource.description}</p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Subject',    value: resource.subject },
            { label: 'Semester',   value: `Sem ${resource.semester}` },
            { label: 'Uploaded by',value: resource.uploadedBy },
            { label: 'Date',       value: resource.uploadedAt },
          ].map(({ label, value }) => (
            <div key={label} className="bg-slate-50 rounded-lg px-4 py-3">
              <p className="text-xs text-slate-400 mb-0.5">{label}</p>
              <p className="text-sm font-semibold text-slate-700">{value}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            id="resource-download-btn"
            onClick={handleDownload}
            className="flex-1 bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            ⬇ Download
          </button>
          <button
            id="resource-preview-btn"
            onClick={() => alert('Preview will open file viewer.')}
            className="flex-1 bg-slate-100 text-slate-700 text-sm font-semibold py-2.5 rounded-lg hover:bg-slate-200 transition-colors"
          >
            👁 Preview
          </button>
        </div>
      </Card>
    </div>
  )
}

export default ResourceDetail
