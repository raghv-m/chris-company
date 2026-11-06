import React from 'react'

function PhotoBand() {
  return (
    <section aria-label="A look at the spaces we clean">
      <img
        src="https://picsum.photos/seed/proclean-office/1200/800"
        alt="Placeholder photo of a tidy office space after an evening clean"
        width="1200"
        height="800"
        loading="lazy"
        className="w-full aspect-[16/9] sm:aspect-[21/9] object-cover"
      />
    </section>
  )
}

export default PhotoBand
