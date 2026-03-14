import { useInView } from '../hooks/useInView'

const SERVICES = [
  {
    icon: 'fas fa-smog',
    title: 'GHG Accounting',
    desc: 'Accurate measurement, reporting, and management of greenhouse gas emissions, guiding informed emission reduction strategies.',
  },
  {
    icon: 'fas fa-leaf',
    title: 'Carbon Neutrality',
    desc: 'Tailored strategies to offset emissions and achieve carbon neutrality, supporting impactful environmental projects.',
  },
  {
    icon: 'fas fa-globe-americas',
    title: 'Net Zero Roadmap',
    desc: 'Customized, science-based net zero strategies aligned with SBTi, paving the way for a sustainable future.',
  },
  {
    icon: 'fas fa-bullseye',
    title: 'SBTi Alignment',
    desc: 'Set science-based targets in line with the latest climate science, driving meaningful reductions in emissions.',
  },
  {
    icon: 'fas fa-file-alt',
    title: 'Standards & Reporting',
    desc: 'Expertise in ISO 14064, CDP, GRI, BRSR, SASB, and TCFD to enhance your sustainability reporting and performance.',
  },
  {
    icon: 'fas fa-road',
    title: 'Decarbonization Roadmap',
    desc: 'Evaluate your carbon footprint, create a comprehensive low-carbon transition plan, and execute strategies with innovative technologies.',
  },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section className={`services${inView ? ' fade-in' : ''}`} id="services" ref={ref}>
      <h2 className="heading">Our Services</h2>
      <div className="box-container">
        {SERVICES.map(service => (
          <div className="box" key={service.title}>
            <i className={`${service.icon} service-icon`} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
