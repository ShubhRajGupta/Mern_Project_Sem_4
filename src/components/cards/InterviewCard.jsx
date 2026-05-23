import Card from '../Card'

export default function InterviewCard({ prep, className = '' }) {
  return (
    <Card className={`p-6 text-center group hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-[var(--ink-muted)] hover:border-t-[var(--accent)] ${className}`}>
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--border)] shadow-sm group-hover:scale-110 transition-transform">
        <span className="text-[var(--accent-gold)] text-xl font-serif">I</span>
      </div>
      <h3 className="font-serif text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{prep.title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">{prep.subject}</p>
    </Card>
  )
}
