import Card from '../Card'

export default function NoteCard({ note, className = '' }) {
  return (
    <Card className={`p-6 relative overflow-hidden group flex flex-col ${className}`}>
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
  )
}
