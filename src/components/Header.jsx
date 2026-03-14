import { useState, useEffect, useCallback } from 'react'
import { useScrollspy } from '../hooks/useScrollspy'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'team', label: 'Our Team' },
  { id: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.id)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollspy(SECTION_IDS)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0)
      setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header className={`header${scrolled ? ' active' : ''}`}>
      <a href="#" className="logo"><h1>SustainPro</h1></a>
      <button
        className={`menu fas ${menuOpen ? 'fa-close' : 'fa-bars'}`}
        aria-expanded={menuOpen}
        aria-controls="navbar"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      />
      <nav className={`navbar${menuOpen ? ' show' : ''}`} id="navbar">
        {NAV_LINKS.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeId === link.id ? 'active' : ''}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
