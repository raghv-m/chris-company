import React from 'react'

const faqs = [
  {
    q: 'How is pricing figured out?',
    a: 'A flat monthly rate based on the size of your space, how many nights a week you want, and what is on your checklist. It is quoted in writing after a walk-through. The rate does not change unless the work does.',
  },
  {
    q: 'Do we need to supply anything?',
    a: 'No. We bring our own equipment, cleaning chemicals and garbage bags. If your building requires specific products, for example in a clinic, we will use those and keep them stocked.',
  },
  {
    q: 'Who actually cleans our building?',
    a: 'A small regular crew assigned to your site, so the same people learn your alarms, keys and layout. If someone is sick, a trained fill-in works from your written checklist.',
  },
  {
    q: 'Is there a long contract?',
    a: 'No. After the first month, service runs month to month and you can stop with 30 days notice. We would rather keep clients with good work than with paperwork.',
  },
  {
    q: 'What if something gets missed?',
    a: 'Call or text the number on your quote. Missed items are re-cleaned on the next visit, or the same day if it is something your customers will see.',
  },
  {
    q: 'Can you start mid-month?',
    a: 'Usually yes. Most new sites start within a week of the walk-through, once keys and alarm codes are sorted out.',
  },
]

function Faq() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight text-green-950 reveal">Questions we get asked</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {faqs.map((item, index) => (
            <div key={item.q} className="reveal" style={{ transitionDelay: `${(index % 2) * 80}ms` }}>
              <h3 className="font-bold text-green-950">{item.q}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
