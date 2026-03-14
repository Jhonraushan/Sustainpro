import { useInView } from '../hooks/useInView'

export default function Home() {
  const [ref, inView] = useInView()

  return (
    <section className={`home${inView ? ' fade-in' : ''}`} id="home" ref={ref}>
      <div className="home-overlay" />
      <div className="home-content">
        <h1>Leading the Way to Eco-Excellence</h1>
        <p>
          SustainPro Energy &amp; Environment Services Pvt Ltd — Your partner in
          sustainable transformation. Specializing in GHG Accounting, Carbon
          Neutrality, Net Zero Roadmaps, SBTi, ISO 14064, CDP, GRI, BRSR &amp;
          SASB.
        </p>
        <a href="#contact" className="btn">Get Started</a>
      </div>
    </section>
  )
}
