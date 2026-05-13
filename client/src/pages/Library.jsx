import { useState } from 'react'
import BookCard from '../components/BookCard'
import { books } from '../data/books'

const CATEGORIES = ['All', ...new Set(books.map(b => b.category))]

function Library() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  // Filter books based on search term and category
  const filteredBooks = books.filter((book) => {
    const matchCategory = category === 'All' || book.category === category
    const matchSearch  = book.title.toLowerCase().includes(search.toLowerCase()) || 
                         book.author.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className="space-y-12">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-[var(--accent-gold)]">
            Reference Materials
          </p>
          <h1 className="text-4xl font-serif text-[var(--accent)]">Academic Library</h1>
        </div>
      </div>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books by title or author..."
            className="w-full px-4 py-3 bg-white border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors placeholder:text-[var(--ink-muted)]"
          />
        </div>
        <div className="w-full md:w-64">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-[var(--border)] text-sm text-[var(--ink-mid)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors appearance-none cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────────────── */}
      {filteredBooks.length === 0 ? (
        <div className="py-24 text-center border border-[var(--border)] bg-white border-dashed">
          <p className="font-serif text-xl text-[var(--ink-muted)]">No books match your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Library
