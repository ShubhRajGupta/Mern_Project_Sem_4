import { Link } from 'react-router-dom'

const STATS = [
  { value: '1,200+', label: 'Academic Papers' },
  { value: '45', label: 'Disciplines' },
  { value: 'Open', label: 'Access' },
]

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] font-sans selection:bg-[var(--accent-gold)] selection:text-white">
      {/* ── Minimal Top Nav ──────────────────────────────────────────────── */}
      <header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center border border-[var(--accent)] text-[var(--accent)] font-serif font-bold text-lg">
            R
          </div>
          <span className="font-serif font-semibold text-xl tracking-tight text-[var(--accent)]">
            Resourcely<span className="text-[var(--accent-gold)]">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm tracking-wide text-[var(--accent)] hover:text-[var(--accent-gold)] transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="px-6 py-2.5 text-sm tracking-wide bg-[var(--accent)] text-white hover:bg-[var(--ink)] transition-colors duration-300">
            Access Archive
          </Link>
        </div>
      </header>

      {/* ── Cinematic Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-32 px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] mb-8 text-[var(--accent-gold)] font-medium">
            Open Academic Repository
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-[var(--accent)] leading-[1.05] mb-8">
            Elevating <br />
            academic discourse, <br />
            <span className="italic text-[var(--ink-mid)] font-light">one document at a time.</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--ink-mid)] max-w-2xl leading-relaxed mb-12 font-light">
            A curated, open-access repository of course materials, research notes, and past papers. Shared by scholars, designed for clarity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-[var(--accent)] text-white tracking-wide text-sm hover:bg-[var(--ink)] transition-colors duration-300 text-center">
              Explore the Archive
            </Link>
            <Link to="/upload" className="w-full sm:w-auto px-8 py-4 border border-[var(--accent)] text-[var(--accent)] tracking-wide text-sm hover:bg-[var(--surface-2)] transition-colors duration-300 text-center">
              Contribute Work
            </Link>
          </div>
        </div>
        
        {/* Decorative Grid Line */}
        <div className="absolute right-8 top-0 h-full w-px bg-[var(--border)] hidden lg:block"></div>
        <div className="absolute right-40 top-0 h-full w-px bg-[var(--border)] hidden lg:block"></div>
      </section>

      {/* ── Stats Section ────────────────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-white">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
          {STATS.map(({ value, label }) => (
            <div key={label} className="py-6 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0">
              <p className="text-4xl md:text-5xl font-serif text-[var(--accent)] mb-2">{value}</p>
              <p className="text-sm tracking-widest uppercase text-[var(--ink-muted)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Content Strategy ─────────────────────────────────────────────── */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--accent)] mb-8">
              A commitment to <br />academic clarity.
            </h2>
            <p className="text-[var(--ink-mid)] leading-relaxed mb-6 font-light">
              We believe that access to high-quality educational materials should not be gated by complex navigation or overwhelming interfaces. Resourcely provides a quiet, focused environment for deep study.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors font-medium">
              Read our philosophy <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 border-l border-[var(--border)] pl-8 lg:pl-16">
            {[
              { title: 'Peer-Sourced Materials', desc: 'Syllabi, lecture notes, and study guides contributed directly by the student body.' },
              { title: 'Rigorous Organization', desc: 'Metadata-driven architecture ensures you find exactly what you need by discipline and semester.' },
              { title: 'Unrestricted Access', desc: 'No paywalls. No aggressive tracking. Just unhindered access to human knowledge.' }
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-xl font-serif text-[var(--accent)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--ink-mid)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[var(--accent)] text-white pt-24 pb-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/20 pb-12 mb-8">
          <div>
            <h2 className="text-3xl font-serif mb-6">Contribute to the collective.</h2>
            <Link to="/register" className="inline-block px-8 py-3 bg-white text-[var(--accent)] hover:bg-[var(--surface-2)] transition-colors text-sm tracking-wide">
              Create an Account
            </Link>
          </div>
          <div className="text-right">
            <p className="font-serif text-xl tracking-tight mb-2">Resourcely.</p>
            <p className="text-white/60 text-sm">Department of Knowledge Sharing</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-xs text-white/40 flex justify-between">
          <p>&copy; {new Date().getFullYear()} Resourcely Initiative.</p>
          <p>MERN Semester Project</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
