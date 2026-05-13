import { useState } from 'react'
import { Link } from 'react-router-dom'
import { classNotes, pyqs, videos, cheatsheets, researchPapers, interviewPrep, syllabus, quizzes } from '../data/resources'
import { NoteCard, PYQCard, VideoCard, CheatsheetCard, SyllabusCard, QuizCard, ResearchCard, InterviewCard } from '../components/cards'

const TABS = ['Overview', 'Class Notes', 'PYQs & Solutions', 'Video Lectures', 'Cheat Sheets', 'Syllabus', 'Quizzes', 'Research Papers', 'Interview Prep']

function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')
  
  // Full Tab Renderers
  const renderNotes = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{classNotes.map(note => <NoteCard key={note.id} note={note} />)}</div>
  const renderPYQs = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{pyqs.map(pyq => <PYQCard key={pyq.id} pyq={pyq} />)}</div>
  const renderVideos = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{videos.map(vid => <VideoCard key={vid.id} vid={vid} />)}</div>
  const renderCheatsheets = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{cheatsheets.map(sheet => <CheatsheetCard key={sheet.id} sheet={sheet} />)}</div>
  const renderSyllabus = () => <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{syllabus.map(syll => <SyllabusCard key={syll.id} syll={syll} />)}</div>
  const renderQuizzes = () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{quizzes.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)}</div>
  const renderResearch = () => <div className="space-y-4">{researchPapers.map(paper => <ResearchCard key={paper.id} paper={paper} />)}</div>
  const renderInterview = () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{interviewPrep.map(prep => <InterviewCard key={prep.id} prep={prep} />)}</div>

  // The All-in-One Overview Tab
  const renderOverview = () => (
    <div className="space-y-16 pb-12">
      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Featured Video Lectures</h2>
          <button onClick={() => setActiveTab('Video Lectures')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.slice(0, 4).map(vid => <VideoCard key={vid.id} vid={vid} />)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Recent Class Notes</h2>
          <button onClick={() => setActiveTab('Class Notes')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classNotes.slice(0, 3).map(note => <NoteCard key={note.id} note={note} />)}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Top PYQs & Solutions</h2>
          <button onClick={() => setActiveTab('PYQs & Solutions')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pyqs.slice(0, 3).map(pyq => <PYQCard key={pyq.id} pyq={pyq} />)}
        </div>
      </section>

      <section className="bg-[var(--surface-2)] -mx-6 px-6 py-12 border-y border-[var(--border)]">
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Trending Resources & Recently Viewed</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cheatsheets.slice(2, 4).map(sheet => <CheatsheetCard key={sheet.id} sheet={sheet} />)}
        </div>
      </section>
      
      <section>
        <div className="flex justify-between items-end mb-6 border-b border-[var(--border)] pb-2">
          <h2 className="text-2xl font-serif text-[var(--accent)]">Seminal Research Papers</h2>
          <button onClick={() => setActiveTab('Research Papers')} className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] hover:text-[var(--accent)] transition-colors">View All &rarr;</button>
        </div>
        <div className="space-y-4">
          {researchPapers.slice(0, 3).map(paper => <ResearchCard key={paper.id} paper={paper} />)}
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
