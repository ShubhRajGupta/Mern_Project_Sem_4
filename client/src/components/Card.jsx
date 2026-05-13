function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white border border-[var(--border)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
