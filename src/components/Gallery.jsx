import React from 'react'

const areas = [
  { city: 'Edmonton', note: 'Full coverage, all quadrants, including downtown and the industrial parks.' },
  { city: 'Sherwood Park', note: 'Retail strips along Baseline Road and Wye Road, plus offices in the business parks.' },
  { city: 'St. Albert', note: 'Stores and clinics along St. Albert Trail and in the newer suburbs to the north.' },
  { city: 'Spruce Grove', note: 'Main street retail, grocery and the highway commercial areas.' },
  { city: 'Leduc', note: 'Retail and offices near the airport corridor and downtown Leduc.' },
]

function ServiceArea() {
  return (
    <section id="area" className="bg-stone-50 border-y border-stone-200 section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight text-green-950 reveal">Where we work</h2>
        <p className="mt-3 text-stone-600 max-w-2xl leading-relaxed reveal">
          We keep the service area tight on purpose. A crew that drives forty minutes each way is a
          crew that starts cutting corners by February.
        </p>
        <div className="snap-carousel-sm mt-10 sm:grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <div key={area.city} className="bg-white p-6 reveal card-hover" style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
              <h3 className="font-bold text-green-950">{area.city}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{area.note}</p>
            </div>
          ))}
          <div className="bg-green-950 p-6 text-white reveal card-hover" style={{ transitionDelay: '160ms' }}>
            <h3 className="font-bold">Outside this list?</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-200">
              Ask anyway. If a site is too far for us to service properly, we will tell you straight
              instead of taking the contract and doing it badly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
