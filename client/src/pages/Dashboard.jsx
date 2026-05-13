import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { classNotes, pyqs, videos, cheatsheets, researchPapers, interviewPrep, syllabus, quizzes } from '../data/resources'

const TABS = ['Overview', 'Class Notes', 'PYQs & Solutions', 'Video Lectures', 'Cheat Sheets', 'Syllabus', 'Quizzes', 'Research Papers', 'Interview Prep']

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')
  
  // Card Renderers
  const renderNoteCard = (note) => (
    <Card key={note.id} className="p-6 relative overflow-hidden group h-full flex flex-col">
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

  const renderPYQCard = (pyq) => (
    <Card key={pyq.id} className="p-6 relative border-l-4 border-l-[var(--accent)] h-full flex flex-col group">
      <div className="mb-2 text-xs font-bold text-[var(--accent-gold)]">{pyq.year}</div>
      <h3 className="font-serif text-lg text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{pyq.title}</h3>
      <div className="mt-auto pt-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">
        <span className="bg-[var(--surface)] px-2 py-1 border border-[var(--border)]">{pyq.subject}</span>
        <span>{pyq.type}</span>
      </div>
    </Card>
  )

  const renderVideoCard = (vid) => (
    <a key={vid.id} href={vid.link} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group flex flex-col h-full bg-white border border-[var(--border)] hover:border-[var(--accent-gold)] transition-colors rounded-sm shadow-sm hover:shadow-md">
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

  const renderCheatsheetCard = (sheet) => (
    <Card key={sheet.id} className="p-6 flex items-center justify-between group hover:bg-[var(--surface-2)] transition-colors border-dashed hover:border-solid hover:border-[var(--accent-gold)]">
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors">{sheet.title}</h3>
        <p className="text-xs text-[var(--ink-muted)] mt-1">{sheet.subject} • {sheet.type}</p>
      </div>
      <button className="px-5 py-2 border border-[var(--border)] bg-white text-xs text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors uppercase tracking-widest">
        View
      </button>
    </Card>
  )

  const renderResearchCard = (paper) => (
    <Card key={paper.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between group hover:border-[var(--accent)] transition-colors">
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors">{paper.title}</h3>
        <p className="text-sm text-[var(--ink-mid)] mt-1">By {paper.author} — Published {paper.year}</p>
      </div>
      <div className="mt-4 md:mt-0 text-[10px] font-bold uppercase tracking-widest text-[var(--accent-gold)] border border-[var(--accent-gold)] px-3 py-1 bg-white self-start md:self-auto">
        {paper.subject}
      </div>
    </Card>
  )

  const renderInterviewCard = (prep) => (
    <Card key={prep.id} className="p-6 text-center group hover:-translate-y-1 transition-transform duration-300 border-t-4 border-t-[var(--ink-muted)] hover:border-t-[var(--accent)]">
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--border)] shadow-sm group-hover:scale-110 transition-transform">
        <span className="text-[var(--accent-gold)] text-xl font-serif">I</span>
      </div>
      <h3 className="font-serif text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{prep.title}</h3>
      <p className="text-[10px] uppercase tracking-widest text-[var(--ink-muted)]">{prep.subject}</p>
    </Card>
  )

  const renderSyllabusCard = (syll) => (
    <Card key={syll.id} className="p-6 flex items-center justify-between group hover:border-[var(--accent)] transition-colors border-l-4 border-l-[var(--surface-2)]">
      <div>
        <h3 className="font-serif text-lg text-[var(--accent)] group-hover:text-[var(--accent-gold)] transition-colors">{syll.title}</h3>
        <p className="text-xs text-[var(--ink-muted)] mt-1">Batch {syll.year} • {syll.type}</p>
      </div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--ink-mid)] border border-[var(--border)] px-3 py-1 bg-[var(--surface-2)]">
        {syll.subject}
      </div>
    </Card>
  )

  const renderQuizCard = (quiz) => (
    <Card key={quiz.id} className="p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform border-t-4 border-t-[var(--accent-gold)]">
      <h3 className="font-serif text-lg text-[var(--accent)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">{quiz.title}</h3>
      <div className="flex items-center gap-4 text-xs text-[var(--ink-muted)] mt-4">
        <span>{quiz.questions} Questions</span>
        <span>•</span>
        <span>{quiz.duration}</span>
      </div>
      <button className="mt-6 w-full py-2 bg-[var(--surface-2)] text-[var(--accent)] text-xs uppercase tracking-widest font-bold group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
        Start Quiz
      </button>
    </Card>
  )

  // Full Tab Renderers
  const renderNotes = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{classNotes.map(renderNoteCard)}</div>
  const renderPYQs = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{pyqs.map(renderPYQCard)}</div>
  const renderVideos = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{videos.map(renderVideoCard)}</div>
  const renderCheatsheets = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{cheatsheets.map(renderCheatsheetCard)}</div>
  const renderSyllabus = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{syllabus.map(renderSyllabusCard)}</div>
  const renderQuizzes = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{quizzes.map(renderQuizCard)}</div>
  const renderResearch = () => <div className="space-y-4">{researchPapers.map(renderResearchCard)}</div>
  const renderInterview = () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{interviewPrep.map(renderInterviewCard)}</div>

  // The All-in-One Overview Tab
  const renderOverview = () => (
    <div className="space-y-16 pb-12">
      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Featured Video Lectures</h2>
          <button onClick={() => setActiveTab('Video Lectures')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.slice(0, 4).map(renderVideoCard)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Recent Class Notes</h2>
          <button onClick={() => setActiveTab('Class Notes')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classNotes.slice(0, 3).map(renderNoteCard)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Top PYQs & Solutions</h2>
          <button onClick={() => setActiveTab('PYQs & Solutions')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pyqs.slice(0, 3).map(renderPYQCard)}
        </div>
      </section>

      <section className="bg-[var(--surface-2)] -mx-6 px-6 py-12 border-y border-[var(--border)]">
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Trending Resources & Recently Viewed</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cheatsheets.slice(2, 4).map(renderCheatsheetCard)}
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Seminal Research Papers</h2>
          <button onClick={() => setActiveTab('Research Papers')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="space-y-4">
          {researchPapers.slice(0, 3).map(renderResearchCard)}
        </div>
      </section>
    </div>
  )

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest mb-2 text-[var(--accent-gold)]">
            Student Centric Platform
          </p>
          <h1 className="text-4xl font-serif text-[var(--accent)]">Repository Hub</h1>
        </div>
        <Link
          to="/upload"
          className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--accent)] text-white text-sm tracking-wide hover:bg-[var(--ink)] transition-colors"
        >
          Deposit Work
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-2 -mb-2 gap-2 hide-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-6 py-3 text-xs uppercase font-bold tracking-widest transition-all border ${
              activeTab === tab 
              ? 'border-[var(--accent)] bg-[var(--accent)] text-white' 
              : 'border-[var(--border)] bg-white text-[var(--ink-mid)] hover:border-[var(--accent-gold)] hover:text-[var(--accent)]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="pt-4 min-h-[50vh]">
        {activeTab === 'Overview' && renderOverview()}
        {activeTab === 'Class Notes' && renderNotes()}
        {activeTab === 'PYQs & Solutions' && renderPYQs()}
        {activeTab === 'Video Lectures' && renderVideos()}
        {activeTab === 'Cheat Sheets' && renderCheatsheets()}
        {activeTab === 'Syllabus' && renderSyllabus()}
        {activeTab === 'Quizzes' && renderQuizzes()}
        {activeTab === 'Research Papers' && renderResearch()}
        {activeTab === 'Interview Prep' && renderInterview()}
      </div>
    </div>
  )
}

export default Dashboard
