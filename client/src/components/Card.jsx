function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white border border-[var(--border)] rounded-sm hover-lift ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
