import { useLayoutEffect } from 'react'

// Scroll reveal built on IntersectionObserver. The hidden starting
// state in index.css is gated behind a .reveal-on class on <html> that
// only this hook adds, so content stays fully visible if JS fails.
function useReveal() {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      return
    }
    document.documentElement.classList.add('reveal-on')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default useReveal
