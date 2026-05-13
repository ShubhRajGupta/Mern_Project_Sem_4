import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { BookOpen, Scroll, Users, Compass } from 'lucide-react'
import { classNotes, videos, researchPapers } from '../data/resources'
import Card from '../components/Card'

const STATS = [
  { value: 1200, suffix: '+', label: 'Academic Papers' },
  { value: 45, suffix: '', label: 'Disciplines' },
  { value: 100, suffix: '%', label: 'Open Access' },
]

// Subtle animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

// Background Particle Component
function BackgroundParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[url('/assets/hero_bg.png')] bg-cover bg-center opacity-10 mix-blend-multiply"></div>
      <div className="particle w-64 h-64 top-[10%] left-[20%] opacity-20" style={{ animationDelay: '0s' }}></div>
      <div className="particle w-96 h-96 top-[40%] right-[10%] opacity-10" style={{ animationDelay: '2s' }}></div>
      <div className="particle w-48 h-48 bottom-[20%] left-[40%] opacity-30" style={{ animationDelay: '5s' }}></div>
    </div>
  )
}

function AnimatedCount({ end, duration = 3, separator = '' }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    let val = Math.round(latest).toString()
    if (separator) {
      val = val.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    }
    return val
  })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, { duration, ease: 'easeOut' })
      return controls.stop
    }
  }, [count, end, duration, inView])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)] font-sans selection:bg-[var(--accent-gold)] selection:text-white overflow-hidden">
      
      <BackgroundParticles />

      {/* ── Minimal Top Nav ──────────────────────────────────────────────── */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center"
      >
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/logo.png" alt="Resourcely" className="w-8 h-8 rounded-sm object-cover border border-[var(--border)] shadow-sm transition-transform group-hover:scale-105" />
          <span className="font-serif font-semibold text-xl tracking-tight text-[var(--accent)]">
            Resourcely<span className="text-[var(--accent-gold)]">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm tracking-wide text-[var(--accent)] hover:text-[var(--accent-gold)] transition-colors">
            Sign In
          </Link>
          <Link to="/register" className="btn-premium px-6 py-2.5 text-sm tracking-wide text-white transition-colors duration-300">
            Access Archive
          </Link>
        </div>
      </motion.header>

      {/* ── Cinematic Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-32 px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[85vh]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl relative z-10"
        >
          <motion.p variants={fadeInUp} className="text-sm uppercase tracking-[0.2em] mb-8 text-[var(--accent-gold)] font-medium flex items-center gap-3">
            <span className="w-8 h-px bg-[var(--accent-gold)]"></span>
            Open Academic Repository
          </motion.p>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-[var(--accent)] leading-[1.05] mb-8">
            Elevating <br />
            academic discourse, <br />
            <span className="italic text-[var(--ink-mid)] font-light">one document at a time.</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[var(--ink-mid)] max-w-2xl leading-relaxed mb-12 font-light">
            A curated, open-access repository of course materials, research notes, and past papers. Shared by scholars, designed for clarity.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/dashboard" className="btn-premium w-full sm:w-auto px-10 py-4 text-white tracking-wide text-sm text-center font-medium">
              Explore the Archive
            </Link>
            <Link to="/upload" className="relative group w-full sm:w-auto px-10 py-4 border border-[var(--accent)] text-[var(--accent)] tracking-wide text-sm text-center transition-all duration-300 overflow-hidden bg-transparent">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contribute Work</span>
              <div className="absolute inset-0 bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              {/* Pulse animation for the border */}
              <div className="absolute inset-0 border border-[var(--accent-gold)] opacity-0 group-hover:opacity-100 group-hover:animate-ping rounded-sm pointer-events-none"></div>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Decorative Grid Lines */}
        <div className="absolute right-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent hidden lg:block opacity-50"></div>
        <div className="absolute right-40 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent hidden lg:block opacity-50"></div>
      </section>

      {/* ── Stats Section (Count-Up) ─────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-white relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]"
        >
          {STATS.map(({ value, suffix, label }, index) => (
            <motion.div key={label} variants={fadeInUp} className="py-6 md:py-0 md:px-12 first:md:pl-0 last:md:pr-0 text-center md:text-left">
              <p className="text-4xl md:text-6xl font-serif text-[var(--accent)] mb-3 drop-shadow-sm">
                <AnimatedCount end={value} duration={3} separator="," />
                <span className="text-[var(--accent-gold)]">{suffix}</span>
              </p>
              <p className="text-sm tracking-widest uppercase text-[var(--ink-muted)] font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Public Archive Preview ──────────────────────────────────────── */}
      <section className="py-24 bg-[var(--surface-2)] relative z-10 overflow-hidden border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--accent)] mb-4 leading-[1.1]">
              Explore our curated <br />academic archive.
            </h2>
            <p className="text-[var(--ink-mid)] text-sm uppercase tracking-widest font-bold">100+ Open Resources Available Immediately</p>
          </div>
          <Link to="/dashboard" className="hidden md:inline-flex text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">
            View Full Repository &rarr;
          </Link>
        </div>

        {/* Video Scroller */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-8 mb-6 flex items-center gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ink-muted)]">Video Lectures</h3>
            <div className="h-px bg-[var(--border)] flex-grow"></div>
          </div>
          <div className="overflow-hidden pause-on-hover relative w-full">
            {/* Fade overlays for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="flex gap-6 px-8 animate-marquee w-max">
              {[...videos.slice(0, 8), ...videos.slice(0, 8)].map((vid, idx) => (
                <a key={`${vid.id}-${idx}`} href={vid.link} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group flex flex-col min-w-[280px] w-[280px] h-full bg-white border border-[var(--border)] hover:border-[var(--accent-gold)] transition-colors rounded-sm shadow-sm hover:shadow-md flex-shrink-0">
                  <div className="h-32 relative border-b border-[var(--border)]">
                    <img src={vid.thumbnail} alt={vid.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[var(--accent)] border-b-[6px] border-b-transparent"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 text-[9px] uppercase tracking-widest text-white/90 font-bold drop-shadow-md">
                      {vid.provider}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-serif text-sm text-[var(--accent)] mb-1 leading-snug line-clamp-2">{vid.title}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)] mt-auto pt-3 border-t border-[var(--surface-2)]">{vid.subject}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Notes Scroller */}
        <div className="mb-12">
          <div className="max-w-7xl mx-auto px-8 mb-6 flex items-center gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ink-muted)]">Class Notes & Syllabi</h3>
            <div className="h-px bg-[var(--border)] flex-grow"></div>
          </div>
          <div className="overflow-hidden pause-on-hover relative w-full" style={{ '--marquee-duration': '45s' }}>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="flex gap-6 px-8 animate-marquee w-max" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
              {[...classNotes.slice(0, 8), ...classNotes.slice(0, 8)].map((note, idx) => (
                <Card key={`${note.id}-${idx}`} className="p-6 relative overflow-hidden group min-w-[300px] w-[300px] flex-shrink-0 flex flex-col bg-white">
                  {note.featured && (
                    <div className="absolute top-0 right-0 bg-[var(--accent-gold)] text-white text-[9px] font-bold px-3 py-1 uppercase tracking-widest z-10 shadow-sm">
                      Recommended
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[var(--ink-muted)] border border-[var(--border)] px-2 py-1 bg-[var(--surface)]">
                      {note.type} • Sem {note.sem}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors pr-8 leading-snug">{note.title}</h3>
                  <p className="text-xs font-bold text-[var(--ink-mid)] mt-auto pt-4 border-t border-[var(--surface-2)]">{note.subject}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Research Papers Scroller */}
        <div>
          <div className="max-w-7xl mx-auto px-8 mb-6 flex items-center gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--ink-muted)]">Seminal Research Papers</h3>
            <div className="h-px bg-[var(--border)] flex-grow"></div>
          </div>
          <div className="overflow-hidden pause-on-hover relative w-full" style={{ '--marquee-duration': '50s' }}>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--surface-2)] to-transparent z-10 pointer-events-none"></div>
            <div className="flex gap-6 px-8 animate-marquee w-max" style={{ animationDuration: '50s' }}>
              {[...researchPapers.slice(0, 8), ...researchPapers.slice(0, 8)].map((paper, idx) => (
                <Card key={`${paper.id}-${idx}`} className="p-6 flex flex-col min-w-[350px] w-[350px] flex-shrink-0 group hover:border-[var(--accent)] transition-colors bg-white">
                  <div>
                    <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors line-clamp-2">{paper.title}</h3>
                    <p className="text-sm text-[var(--ink-mid)] mt-2">By {paper.author} — {paper.year}</p>
                  </div>
                  <div className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] border border-[var(--accent-gold)] px-3 py-1 bg-[var(--surface)] self-start mt-auto">
                    {paper.subject}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 px-8 text-center md:hidden">
          <Link to="/dashboard" className="inline-flex text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">
            View Full Repository &rarr;
          </Link>
        </div>
      </section>

      {/* ── Content Strategy (Scroll Animations) ─────────────────────────── */}
      <section className="py-32 px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="chapter-ornament"></span>
            <h2 className="text-3xl md:text-5xl font-serif text-[var(--accent)] mb-8 leading-[1.1]">
              A commitment to <br />academic clarity.
            </h2>
            <p className="text-[var(--ink-mid)] text-lg leading-relaxed mb-8 font-light">
              We believe that access to high-quality educational materials should not be gated by complex navigation or overwhelming interfaces. Resourcely provides a quiet, focused environment for deep study.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-3 text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors font-medium">
              Read our philosophy 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-12 border-l border-[var(--border)] pl-8 lg:pl-16 relative"
          >
            {[
              { icon: Users, title: 'Peer-Sourced Materials', desc: 'Syllabi, lecture notes, and study guides contributed directly by the student body.' },
              { icon: BookOpen, title: 'Rigorous Organization', desc: 'Metadata-driven architecture ensures you find exactly what you need by discipline and semester.' },
              { icon: Compass, title: 'Unrestricted Access', desc: 'No paywalls. No aggressive tracking. Just unhindered access to human knowledge.' }
            ].map(({ icon: Icon, title, desc }, idx) => (
              <motion.div key={title} variants={fadeInUp} className="relative group">
                <div className="absolute -left-[49px] lg:-left-[81px] top-1 p-1 bg-[var(--surface)] text-[var(--accent-gold)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-[var(--accent)] mb-3 transition-colors">{title}</h3>
                <p className="text-[var(--ink-mid)] leading-relaxed font-light">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[var(--accent)] text-white pt-24 pb-12 px-8 relative overflow-hidden">
        {/* Subtle background glow in footer */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-gold)] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-12 mb-8 relative z-10"
        >
          <div>
            <h2 className="text-3xl font-serif mb-8 text-[var(--accent-pale)]">Contribute to the collective.</h2>
            <Link to="/register" className="inline-block px-10 py-4 bg-white text-[var(--accent)] hover:bg-[var(--surface-2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 text-sm tracking-wide font-medium">
              Create an Account
            </Link>
          </div>
          <div className="text-right">
            <p className="font-serif text-2xl tracking-tight mb-2 text-[var(--accent-gold)]">Resourcely.</p>
            <p className="text-white/60 text-sm font-light">Department of Knowledge Sharing</p>
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto text-xs text-white/40 flex justify-between relative z-10">
          <p>&copy; {new Date().getFullYear()} Resourcely Initiative.</p>
          <p className="tracking-widest uppercase">MERN Sem 4</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
