import React, { useCallback, useEffect, useState } from 'react'

const slides = [
  {
    seed: 'proclean-office',
    alt: 'Placeholder photo of a tidy office space after an evening clean',
  },
  {
    seed: 'proclean-retail',
    alt: 'Placeholder photo of a bright retail sales floor after a nightly clean',
  },
  {
    seed: 'proclean-floors',
    alt: 'Placeholder photo of a freshly scrubbed and polished store floor',
  },
  {
    seed: 'proclean-glass',
    alt: 'Placeholder photo of clean storefront glass and entry doors',
  },
]

function PhotoBand() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  const goTo = useCallback(
    (i) => {
      setIndex(((i % count) + count) % count)
    },
    [count]
  )

  // Auto-advance every 5 seconds. Pauses while the pointer or keyboard
  // focus is on the carousel, and never runs for reduced-motion users
  // (the track transition is also disabled for them in index.css).
  useEffect(() => {
    if (paused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, 5000)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <section
      aria-label="A look at the spaces we clean"
      aria-roledescription="carousel"
      className="relative overflow-hidden border-y border-stone-200 bg-stone-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-track flex" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <img
            key={slide.seed}
            src={`https://picsum.photos/seed/${slide.seed}/1200/800`}
            alt={slide.alt}
            width="1200"
            height="800"
            loading={i === 0 ? 'eager' : 'lazy'}
            aria-hidden={i !== index}
            className="w-full shrink-0 aspect-[16/9] sm:aspect-[21/9] object-cover"
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-950 shadow-md transition duration-200 hover:bg-white hover:shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-green-950 shadow-md transition duration-200 hover:bg-white hover:shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-green-950/50 px-2.5 py-2">
        {slides.map((slide, i) => (
          <button
            key={slide.seed}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default PhotoBand
