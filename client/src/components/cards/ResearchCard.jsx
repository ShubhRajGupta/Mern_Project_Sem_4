import Card from '../Card'

export default function ResearchCard({ paper, className = '' }) {
  return (
    <Card className={`p-6 flex flex-col md:flex-row md:items-center justify-between group hover:border-[var(--accent)] transition-colors ${className}`}>
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors line-clamp-2">{paper.title}</h3>
        <p className="text-sm text-[var(--ink-mid)] mt-1">By {paper.author} — {paper.year}</p>
      </div>
      <div className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] border border-[var(--accent-gold)] px-3 py-1 bg-[var(--surface)] self-start md:self-auto">
        {paper.subject}
      </div>
    </Card>
  )
}
