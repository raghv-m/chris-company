import React from 'react'

function Hero() {
  return (
    <section id="top" className="bg-stone-50 border-b border-stone-200">
      <div className="container-max section-padding hero-in lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div className="lg:col-start-1 lg:row-start-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-900">
          Nightly cleaning for stores, offices and clinics
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
          Your store, cleaned after close and ready by open.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
          Alberta ProClean cleans retail stores, offices and clinics across Edmonton, Sherwood Park,
          St. Albert, Spruce Grove and Leduc. A regular crew works from a written checklist made for
          your building, and your floors are dry before your first customer walks in.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#quote" className="btn-primary w-full sm:w-auto">Get a quote</a>
          <a href="#services" className="btn-secondary w-full sm:w-auto">See the services</a>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 text-sm font-medium text-stone-700 max-w-3xl">
          <li className="border-l-4 border-green-800 pl-3">Evenings and overnight, 7 nights a week</li>
          <li className="border-l-4 border-green-800 pl-3">Same crew on a set schedule</li>
          <li className="border-l-4 border-green-800 pl-3">We bring our own equipment and supplies</li>
        </ul>
        </div>
        <figure className="mt-12 lg:mt-0 lg:col-start-2 lg:row-start-1 border border-stone-200 bg-white p-2 shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&h=800&q=80"
            alt="Clean, bright clothing store interior with tidy shelves and clothing racks"
            width="1200"
            height="800"
            fetchpriority="high"
            className="w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] object-cover"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
