import Card from '../Card'

export default function QuizCard({ quiz, className = '' }) {
  return (
    <Card className={`p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform border-t-4 border-t-[var(--accent-gold)] ${className}`}>
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
}
