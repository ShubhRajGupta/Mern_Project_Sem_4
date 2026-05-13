import { Link } from 'react-router-dom'

// Feature card data — easy to edit or pull from API later
const features = [
  {
    icon: '📂',
    title: 'Subject-Wise Resources',
    desc: 'Find notes, papers, and books organized by subject and semester — no more hunting through group chats.',
  },
  {
    icon: '⬆️',
    title: 'Easy Upload',
    desc: 'Upload PDFs, slides, or docs in seconds. Tag them with subject and semester for instant discoverability.',
  },
  {
    icon: '🔍',
    title: 'Fast Search',
    desc: 'Search by title, subject, or keyword across hundreds of student-uploaded resources.',
  },
  {
    icon: '📥',
    title: 'One-Click Download',
    desc: 'Download any resource instantly. No accounts required to browse; sign up only to upload.',
  },
]

function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Navbar ──────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              CR
            </div>
            <span className="font-semibold text-slate-800 tracking-tight">
              College Resource Hub
            </span>
          </Link>
          <nav className="flex items-center gap-3">
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
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          Built for students, by students
        </span>

        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6 tracking-tight">
          Your college notes,
          <br />
          <span className="text-indigo-600">organized for you.</span>
        </h1>

        <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Upload, discover, and download academic resources shared by your
          peers. Everything — from past papers to lecture slides — in one
          clean place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/register"
            id="hero-cta-primary"
            className="w-full sm:w-auto bg-indigo-600 text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100"
          >
            Start for Free
          </Link>
          <Link
            to="/dashboard"
            id="hero-cta-secondary"
            className="w-full sm:w-auto bg-slate-100 text-slate-700 text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-200 transition-colors"
          >
            Browse Resources →
          </Link>
        </div>

        {/* Hero visual — a simple stats strip */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Resources' },
            { value: '20+',  label: 'Subjects' },
            { value: '100%', label: 'Free' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-slate-50 rounded-xl py-5 px-3 border border-slate-100">
              <p className="text-2xl font-bold text-slateigo-900">{value}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Everything you need to study better
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm">
              A focused set of features built around how students actually
              study — not how enterprises manage files.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm">
                  {title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to stop losing notes?
          </h2>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed">
            Join your classmates. Share what you know, get what you need.
            It takes less than a minute to sign up.
          </p>
          <Link
            to="/register"
            id="cta-bottom"
            className="inline-block bg-indigo-600 text-white text-sm font-semibold px-10 py-3.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100"
          >
            Create a Free Account
          </Link>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} College Resource Hub — MERN Semester Project
      </footer>
    </div>
  )
}

export default Landing
