import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { target: 15, label: 'Projects Completed' },
  { target: 5, label: 'Clients Worldwide' },
  { target: 1, label: 'Years of Experience' },
  { target: 4, label: 'Industry Experts' },
]

function StatBox({ target, label, animate }) {
  const count = useCountUp(target, animate)
  return (
    <div className="stat-box">
      <span className="stat-number">{count}</span>+
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className="stats" id="stats" ref={ref}>
      <div className="stats-container">
        {STATS.map(stat => (
          <StatBox key={stat.label} target={stat.target} label={stat.label} animate={inView} />
        ))}
      </div>
    </section>
  )
}
