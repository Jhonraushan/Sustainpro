import { useState, useCallback } from 'react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    alert(`Thank you ${form.name}! We will get back to you soon.`)
    setForm({ name: '', email: '', message: '' })
  }, [form.name])

  return (
    <section className={`contact${inView ? ' fade-in' : ''}`} id="contact" ref={ref}>
      <h2 className="heading">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope" />
            <div>
              <strong>Email</strong>
              <a href="mailto:business@sustainpro.in">business@sustainpro.in</a>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone" />
            <div>
              <strong>Phone</strong>
              <a href="tel:+918210022066">+91 8210022066</a>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt" />
            <div>
              <strong>Location</strong>
              <span>Indore, Madhya Pradesh 452010, India</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>
      </div>
      <p className="contact-tagline">
        Ready to take the next step? Connect with us to discuss how we can help
        your organization achieve sustainability success.
      </p>
    </section>
  )
}
