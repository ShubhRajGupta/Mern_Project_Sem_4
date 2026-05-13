// Card is a reusable surface for grouping content.
// Pass `className` to extend or override default styles per usage.
function Card({ children, className = '' }) {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-100 shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
