import React from 'react'

const steps = [
  {
    title: '1. Walk-through',
    text: 'We come to your space, measure it, and talk through what needs doing and how often. Your quote is a flat monthly rate in writing, not an hourly estimate that creeps.',
  },
  {
    title: '2. A checklist for your site',
    text: 'Your clean gets written down as a checklist specific to your building: which floors, which washrooms, what gets restocked, what gets locked. The crew works from that list every visit.',
  },
  {
    title: '3. Same crew, set nights',
    text: 'A regular crew learns your alarm codes, your keys and the quirks of your building. Cleaning happens after close or overnight, on the same nights each week.',
  },
  {
    title: '4. Checked work',
    text: 'A supervisor walks sites on a rotation and checks against the list. If something gets missed, you call one number and it is re-cleaned on the next visit, or sooner if it cannot wait.',
  },
]

function HowItWorks() {
  return (
    <section id="how" className="bg-stone-50 border-y border-stone-200 section-padding">
      <div className="container-max">
        <h2 className="text-3xl font-bold tracking-tight text-green-950">How it works</h2>
        <p className="mt-3 text-stone-600 max-w-2xl leading-relaxed">
          No app, no ticket system, no call centre. Four steps and a phone number.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.title} className="border-t-4 border-green-800 pt-4">
              <h3 className="font-bold text-green-950">{step.title}</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm font-medium text-stone-700">
          We bring our own equipment and supplies. Key and alarm procedures are agreed in writing before the first clean. Staff are trained on WHMIS basics and site safety rules.
        </p>
      </div>
    </section>
  )
}

export default HowItWorks
