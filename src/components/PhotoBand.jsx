import React, { useCallback, useEffect, useRef, useState } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Sunlit office meeting room with a polished floor and glass walls after an evening clean',
  },
  {
    src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Neat clothing racks and folded stacks on a retail sales floor after a nightly clean',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Polished office floor and glass partition walls after a floor care visit',
  },
  {
    src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&h=900&q=80',
    alt: 'Open sign hanging on clean storefront glass at a shop entrance',
  },
]

function PhotoBand() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)
  const count = slides.length

  const goTo = useCallback(
    (i) => {
      setIndex(((i % count) + count) % count)
    },
    [count]
  )

  // Auto-advance every 5 seconds. Pauses while the pointer, a touch or
  // keyboard focus is on the carousel, and never runs for
  // reduced-motion users (the track transition is also disabled for
  // them in index.css).
  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, 5000)
    return () => clearInterval(id)
  }, [paused, count])

  // Touch swipe: a horizontal drag of 40px or more moves one slide.
  const handleTouchStart = (event) => {
    setPaused(true)
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current !== null) {
      const dx = event.changedTouches[0].clientX - touchStartX.current
      if (Math.abs(dx) > 40) {
        goTo(index + (dx < 0 ? 1 : -1))
      }
      touchStartX.current = null
    }
    setPaused(false)
  }

  return (
    <section
      aria-label="A look at the spaces we clean"
      aria-roledescription="carousel"
      className="relative border-y border-stone-200 bg-stone-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div className="carousel-track flex" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width="1600"
              height="900"
              loading={i === 0 ? 'eager' : 'lazy'}
              aria-hidden={i !== index}
              className="aspect-[16/9] w-full shrink-0 basis-full object-cover sm:aspect-[21/9]"
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-950 shadow-md transition duration-200 hover:bg-white hover:shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-950 shadow-md transition duration-200 hover:bg-white hover:shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center rounded-full">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className="flex h-11 w-11 items-center justify-center rounded-full"
          >
            <span
              className={`h-2 rounded-full shadow-sm transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/70 hover:bg-white'}`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}

export default PhotoBand
