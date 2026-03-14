import { useState, useEffect, useCallback } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <button
      className={`to-top${visible ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span className="fas fa-arrow-up" />
    </button>
  )
}
