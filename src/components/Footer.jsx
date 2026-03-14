const SOCIALS = [
  { href: 'https://www.linkedin.com/company/sustainpro-energy-environment', label: 'LinkedIn', icon: 'logo-linkedin' },
  { href: 'https://www.twitter.com', label: 'Twitter', icon: 'logo-twitter' },
  { href: 'https://www.youtube.com', label: 'YouTube', icon: 'logo-youtube' },
  { href: 'https://www.google.com', label: 'Google', icon: 'logo-google' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#" className="logo">
        SustainPro<span> Energy &amp; Environment</span>
      </a>
      <div className="socials">
        {SOCIALS.map(social => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <ion-icon name={social.icon}></ion-icon>
          </a>
        ))}
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} SustainPro Energy &amp; Environment Services Pvt Ltd. All rights reserved.
      </p>
    </footer>
  )
}
