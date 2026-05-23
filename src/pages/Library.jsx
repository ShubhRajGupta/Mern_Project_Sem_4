import { useState, useEffect } from 'react'
import BookCard from '../components/BookCard'

const CATEGORIES = ['All', 'Computer Science', 'Mathematics', 'Physics', 'Engineering', 'Economics', 'Literature']

function Library() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Computer Science')
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // Fetch from Open Library API with debounce
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(null)
      try {
        let url = ''
        if (search.trim()) {
          // Search globally
          url = `https://openlibrary.org/search.json?q=${encodeURIComponent(search)}&limit=16&page=${page}`
        } else {
          // Browse by subject
          const subj = category === 'All' ? 'science' : category.toLowerCase().replace(' ', '_')
          url = `https://openlibrary.org/search.json?subject=${subj}&limit=16&page=${page}`
        }
        
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch data')
        const data = await res.json()
        
        // Filter to ensure we only show books with covers for a better UI experience
        const formattedBooks = data.docs.filter(doc => doc.cover_i).map(doc => ({
          id: doc.key,
          title: doc.title,
          author: doc.author_name ? doc.author_name.join(', ') : 'Unknown Author',
          category: category === 'All' ? (doc.subject ? doc.subject[0] : 'General') : category,
          image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
          link: `https://openlibrary.org${doc.key}`,
          description: `First published in ${doc.first_publish_year || 'unknown'}. ${doc.edition_count ? doc.edition_count + ' editions available globally.' : ''}`
        }))
        
        if (page === 1) {
          setBooks(formattedBooks)
        } else {
          setBooks(prev => [...prev, ...formattedBooks])
        }
        setHasMore(formattedBooks.length === 16)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    // Debounce the API call by 600ms so we don't spam Open Library while typing
    const timer = setTimeout(() => {
      fetchBooks()
    }, 600) 

    return () => clearTimeout(timer)
  }, [search, category, page])

  // Reset page to 1 when search or category changes
  useEffect(() => {
    setPage(1)
  }, [search, category])

  return (
    <div className="space-y-12">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-[var(--accent-gold)]">
            Live Global Database
          </p>
          <h1 className="text-4xl font-serif text-[var(--accent)]">Open Library Search</h1>
        </div>
      </div>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search millions of books globally..."
            className="w-full px-4 py-3 bg-white border border-[var(--border)] text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-colors placeholder:text-[var(--ink-muted)]"
          />
        </div>
        <div className="w-full md:w-64">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              if(search) setSearch('') // Clear search when changing category
            }}
            className="w-full px-4 py-3 bg-white border border-[var(--border)] text-sm text-[var(--ink-mid)] focus:outline-none focus:border-[var(--accent-gold)] transition-colors appearance-none cursor-pointer"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Grid ──────────────────────────────────────────────────────────── */}
      {error ? (
        <div className="py-24 text-center border border-[var(--border)] bg-white border-dashed">
          <p className="font-serif text-xl text-red-700">Error connecting to Open Library: {error}</p>
        </div>
      ) : books.length === 0 && !loading ? (
        <div className="py-24 text-center border border-[var(--border)] bg-white border-dashed">
          <p className="font-serif text-xl text-[var(--ink-muted)]">No books match your criteria.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book, idx) => (
              <BookCard key={`${book.id}-${idx}`} book={book} />
            ))}
          </div>
          
          {loading && (
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-8 h-8 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-serif text-sm text-[var(--ink-muted)] uppercase tracking-widest">Loading...</p>
            </div>
          )}

          {!loading && hasMore && books.length > 0 && (
            <div className="pt-8 text-center">
              <button 
                onClick={() => setPage(p => p + 1)}
                className="px-8 py-3 bg-[var(--surface-2)] border border-[var(--border)] text-[var(--accent)] font-bold text-xs uppercase tracking-widest hover:border-[var(--accent)] hover:bg-white transition-colors"
              >
                Load More Books
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Library
