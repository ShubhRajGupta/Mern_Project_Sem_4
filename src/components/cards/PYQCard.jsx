import Card from '../Card'

export default function PYQCard({ pyq, className = '' }) {
  return (
    <Card className={`p-6 relative border-l-4 border-l-[var(--accent)] flex flex-col group ${className}`}>
      <div className="mb-2 text-xs font-bold text-[var(--accent-gold)]">{pyq.year}</div>
      <h3 className="font-serif text-lg text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{pyq.title}</h3>
      <div className="mt-auto pt-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
        <span className="bg-[var(--surface)] px-2 py-1 border border-[var(--border)]">{pyq.subject}</span>
        <span>{pyq.type}</span>
      </div>
    </Card>
  )
}
