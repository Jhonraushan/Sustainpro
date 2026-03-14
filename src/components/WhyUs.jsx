import { useInView } from '../hooks/useInView'

const REASONS = [
  {
    icon: 'fas fa-award',
    title: 'Expertise & Excellence',
    desc: 'A seasoned team with extensive experience in sustainability and carbon management.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Client-Centric Approach',
    desc: 'Tailoring services to unique client needs, ensuring value delivery at every stage.',
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Impact-Driven Results',
    desc: 'Passionate about creating a greener, sustainable future and driving real change for organizations.',
  },
]

export default function WhyUs() {
  const [ref, inView] = useInView()

  return (
    <section className={`why-us${inView ? ' fade-in' : ''}`} id="why-us" ref={ref}>
      <h2 className="heading">Why Choose SustainPro</h2>
      <div className="box-container">
        {REASONS.map(r => (
          <div className="box" key={r.title}>
            <i className={`${r.icon} why-icon`} />
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
