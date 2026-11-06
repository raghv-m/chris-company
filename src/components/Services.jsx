import React from 'react'

const services = [
  {
    title: 'Nightly retail cleaning',
    text: 'Sales floor swept and mopped, entry glass and door handles wiped, counters and till areas cleaned, garbage and recycling out, washrooms restocked. Done after close, on the nights you pick, from two nights a week up to seven.',
  },
  {
    title: 'Floor care',
    text: 'Machine scrubbing and burnishing for tile and vinyl, carpet spot cleaning, and scheduled deep cleans for entryways and vestibules that take the worst of the salt and gravel every winter.',
  },
  {
    title: 'Washroom sanitization',
    text: 'Toilets, urinals, sinks, mirrors and stall partitions cleaned and disinfected. Soap, paper and supplies restocked, and dispensers checked so nothing runs empty in the middle of a Saturday.',
  },
  {
    title: 'Window cleaning',
    text: 'Storefront glass, entry doors and interior partitions on a set rotation. Fingerprints, tape residue and winter road film removed so the front of the store looks looked after.',
  },
  {
    title: 'Office and clinic cleaning',
    text: 'Waiting rooms, offices, kitchens and washrooms, with desks and high touch points wiped down. Clinics get treatment and exam rooms cleaned to a written protocol. All of it after hours, so nobody steps around a mop bucket.',
  },
  {
    title: 'Post-construction cleanup',
    text: 'Dust removal from every surface, paint and sticker residue, a full floor scrub and a final detail clean. The unglamorous last step that lets a renovated space actually open its doors.',
  },
]

function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight text-green-950">What we clean</h2>
        <p className="mt-3 text-stone-600 max-w-2xl leading-relaxed">
          Six services, quoted as one flat monthly rate for your building. Pick the nights and the
          checklist items you need. Nothing is bundled in that you did not ask for.
        </p>
        <div className="mt-10 grid gap-px bg-stone-200 border border-stone-200 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bg-white p-6">
              <h3 className="font-bold text-green-950">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
