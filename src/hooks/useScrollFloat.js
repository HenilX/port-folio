import { useRef, useEffect, useState } from 'react'

export function useScrollFloat(intensity = 20) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const elementRect = element.getBoundingClientRect()
      const elementCenter = elementRect.top + elementRect.height / 2
      const viewportCenter = window.innerHeight / 2
      
      // Calculate distance from viewport center (-1 to 1)
      const distance = (elementCenter - viewportCenter) / viewportCenter
      
      // Only apply when element is in view
      if (elementRect.top < window.innerHeight && elementRect.bottom > 0) {
        setOffset(distance * intensity)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [intensity])

  return { ref, offset }
}
