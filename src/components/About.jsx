import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section className={`about${inView ? ' fade-in' : ''}`} id="about" ref={ref}>
      <div className="box-container">
        <div className="box">
          <h2 className="heading">About Us</h2>
          <p>
            SustainPro Energy &amp; Environment Services Pvt Ltd is a pioneer
            specializing in GHG accounting, carbon neutrality, net zero roadmap
            design, and alignment with Science-Based Targets (SBTi). Based in
            Indore, Madhya Pradesh, we are passionate about creating a greener,
            sustainable future and driving real change for organizations across
            India and beyond.
          </p>
        </div>
        <div className="box">
          <div className="image">
            <img src="/images/pic.jpg" alt="Team working towards sustainability" />
          </div>
        </div>
      </div>
    </section>
  )
}
