export default function VideoCard({ vid, className = '' }) {
  return (
    <a href={vid.link} target="_blank" rel="noopener noreferrer" className={`relative overflow-hidden group flex flex-col bg-white border border-[var(--border)] hover:border-[var(--accent-gold)] transition-colors rounded-sm shadow-sm hover:shadow-md ${className}`}>
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
  )
}
