import React from 'react'

function Hero() {
  return (
    <section id="top" className="bg-stone-50 border-b border-stone-200">
      <div className="container-max section-padding">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-900">
          Nightly cleaning for stores, offices and clinics
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-green-950 max-w-3xl">
          Your store, cleaned after close and ready by open.
        </h1>
        <p className="mt-5 text-lg text-stone-600 max-w-2xl leading-relaxed">
          Alberta ProClean cleans retail stores, offices and clinics across Edmonton, Sherwood Park,
          St. Albert, Spruce Grove and Leduc. A regular crew works from a written checklist made for
          your building, and your floors are dry before your first customer walks in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#quote" className="btn-primary">Get a quote</a>
          <a href="#services" className="btn-secondary">See the services</a>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-sm font-medium text-stone-700 max-w-3xl">
          <li className="border-l-4 border-green-800 pl-3">Evenings and overnight, 7 nights a week</li>
          <li className="border-l-4 border-green-800 pl-3">Same crew on a set schedule</li>
          <li className="border-l-4 border-green-800 pl-3">We bring our own equipment and supplies</li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
