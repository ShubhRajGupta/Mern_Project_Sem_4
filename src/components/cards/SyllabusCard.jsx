import Card from '../Card'

export default function SyllabusCard({ syll, className = '' }) {
  return (
    <Card className={`p-6 flex items-center justify-between group hover:border-[var(--accent)] transition-colors border-l-4 border-l-[var(--surface-2)] ${className}`}>
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors">{syll.title}</h3>
        <p className="text-xs text-[var(--ink-muted)] mt-1">Batch {syll.year} • {syll.type}</p>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--ink-mid)] border border-[var(--border)] px-3 py-1 bg-[var(--surface-2)]">
        {syll.subject}
      </div>
    </Card>
  )
}
