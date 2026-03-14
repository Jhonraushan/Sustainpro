import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, shouldStart, duration = 1500) {
  const [count, setCount] = useState(0)
  const animated = useRef(false)

  useEffect(() => {
    if (!shouldStart || animated.current) return
    animated.current = true

    const start = performance.now()

    function step(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(step)
  }, [shouldStart, target, duration])

  return count
}
