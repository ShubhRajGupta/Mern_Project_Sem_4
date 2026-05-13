import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { BookOpen, Scroll, Users, Compass } from 'lucide-react'

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
          <div className="w-8 h-8 flex items-center justify-center border border-[var(--accent)] text-[var(--accent)] font-serif font-bold text-lg transition-transform group-hover:scale-105">
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
