import Card from '../Card'

export default function CheatsheetCard({ sheet, className = '' }) {
  return (
    <Card className={`p-6 flex items-center justify-between group hover:bg-[var(--surface-2)] transition-colors border-dashed hover:border-solid hover:border-[var(--accent-gold)] ${className}`}>
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors">{sheet.title}</h3>
        <p className="text-xs text-[var(--ink-muted)] mt-1">{sheet.subject} • {sheet.type}</p>
      </div>
      <button className="px-5 py-2 border border-[var(--border)] bg-white text-xs text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors uppercase tracking-widest">
        View
      </button>
    </Card>
  )
}
