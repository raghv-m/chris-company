import React from 'react'

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 reveal">
          <h2 className="text-3xl font-bold tracking-tight text-green-950">An Edmonton cleaning crew, not a call centre</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Alberta ProClean Services is based in Edmonton and cleans for independent retailers,
            grocery and pharmacy stores, offices and small clinics around the metro area. When you
            call, you get someone here who knows your building, not a dispatcher in another province.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            The work itself is unglamorous and we treat it that way. Show up on the nights we said,
            work the checklist, restock what is empty, lock up properly, and leave the place ready
            for morning. Most of our cleans happen between the time your doors lock and the time
            they open again.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            If your store opens at seven, your floors cannot still be wet at seven. That one fact is
            what our schedules are built around.
          </p>
        </div>
        <div className="lg:col-span-2 reveal" style={{ transitionDelay: '100ms' }}>
          <figure className="border border-stone-200 bg-white p-2 mb-6">
            <img
              src="https://picsum.photos/seed/proclean-crew/1200/800"
              alt="Placeholder photo of a cleaner at work in a commercial space"
              width="1200"
              height="800"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </figure>
          <div className="border border-stone-200 p-6">
            <h3 className="font-bold text-green-950">Who we clean for</h3>
            <ul className="mt-3 space-y-2 text-sm text-stone-600">
              <li>Retail stores, large floor plates and small storefronts</li>
              <li>Grocery, pharmacy and liquor stores</li>
              <li>Professional offices and law and accounting firms</li>
              <li>Dental, medical and physio clinics</li>
              <li>Renovated spaces that need a post-construction clean</li>
            </ul>
          </div>
          <div className="border border-stone-200 border-t-0 p-6">
            <h3 className="font-bold text-green-950">Office hours</h3>
            <p className="mt-3 text-sm text-stone-600">
              Monday to Friday, 8 am to 6 pm. Cleaning crews work evenings and overnight, 7 nights a week.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
