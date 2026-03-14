import { useInView } from '../hooks/useInView'

const TEAM = [
  {
    icon: 'fas fa-user-tie',
    title: 'Sustainability Consultants',
    desc: 'Our experienced consultants provide expert advice on sustainability strategies and help companies achieve their goals.',
  },
  {
    icon: 'fas fa-temperature-high',
    title: 'Climate Change Experts',
    desc: 'Our experts guide action, decipher data, and shape policy for a sustainable and resilient future in a warming world.',
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Reporting Professionals',
    desc: 'Our professionals communicate corporate ESG performance to stakeholders, fostering transparency and responsible business practices.',
  },
]

export default function Team() {
  const [ref, inView] = useInView()

  return (
    <section className={`team${inView ? ' fade-in' : ''}`} id="team" ref={ref}>
      <h2 className="heading">Our Expert Team</h2>
      <div className="box-container">
        {TEAM.map(member => (
          <div className="box" key={member.title}>
            <i className={`${member.icon} team-icon`} />
            <h3>{member.title}</h3>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
