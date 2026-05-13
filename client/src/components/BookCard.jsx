import Card from './Card'

function BookCard({ book }) {
  return (
    <Card className="h-full flex flex-col relative overflow-hidden group">
      {/* Book Cover Image */}
      <div className="h-64 relative bg-[#f4f3f0] border-b border-[var(--border)] p-6 flex items-center justify-center overflow-hidden">
        {/* Faint background blur of the cover to fill the empty space */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-xl scale-125"
          style={{ backgroundImage: `url(${book.image})` }}
        ></div>
        
        {/* Actual book standing in the center */}
        <img 
          src={book.image} 
          alt={book.title} 
          className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(10,37,64,0.15)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(10,37,64,0.25)] relative z-10" 
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="mb-4">
          <span className="text-[10px] font-mono tracking-widest text-[var(--ink-muted)] border border-[var(--border)] px-2 py-1 bg-[var(--surface)] inline-block mb-3">
            {book.category}
          </span>
          <h2 className="font-serif text-lg text-[var(--accent)] mb-1 leading-snug group-hover:text-[var(--accent-gold)] transition-colors line-clamp-2">
            {book.title}
          </h2>
          <p className="text-sm font-medium text-[var(--ink-mid)]">{book.author}</p>
        </div>
        
        <p className="text-sm text-[var(--ink-muted)] mb-6 flex-grow line-clamp-3">
          {book.description}
        </p>
        
        {/* Action Button */}
        <a 
          href={book.link}
          target="_blank"
          rel="noopener noreferrer" 
          className="mt-auto block w-full py-2.5 text-center border border-[var(--border)] text-[var(--accent)] text-sm tracking-wide hover:bg-[var(--surface-2)] hover:border-[var(--accent-gold)] transition-all duration-300"
        >
          Open Resource
        </a>
      </div>
    </Card>
  )
}

export default BookCard
