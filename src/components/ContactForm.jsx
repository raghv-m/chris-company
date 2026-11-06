import React, { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  const inputClass = 'w-full min-h-[48px] border border-stone-300 rounded-md px-3.5 py-3 text-base placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-green-800'
  const labelClass = 'block text-sm font-semibold text-stone-700 mb-1.5'

  return (
    <section id="quote" className="bg-stone-50 border-t border-stone-200 section-padding">
      <div className="container-max grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 reveal">
          <h2 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">Request a quote</h2>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Tell us what kind of space you have and where it is. We reply within one business day to
            book a walk-through, and the quote itself is a flat monthly rate in writing. No obligation
            and no sales visit that drags on for an hour.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-bold text-green-950">Email</dt>
              <dd className="mt-1 text-stone-600">
                <a href="mailto:quotes@albertaproclean.ca" className="inline-flex min-h-[44px] items-center underline underline-offset-4">quotes@albertaproclean.ca</a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-green-950">Quote form</dt>
              <dd className="mt-1 leading-relaxed text-stone-600">
                Send the form on this page with a few details about your space. We reply within
                one business day to book a walk-through.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-green-950">Hours</dt>
              <dd className="mt-1 text-stone-600">
                Office: Monday to Friday, 8 am to 6 pm.<br />
                Cleaning: evenings and overnight, 7 nights a week.
              </dd>
            </div>
            <div>
              <dt className="font-bold text-green-950">Based in</dt>
              <dd className="mt-1 text-stone-600">Edmonton, Alberta. Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove and Leduc.</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-3 reveal" style={{ transitionDelay: '100ms' }}>
          {sent ? (
            <div className="border border-green-800 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-green-950">Thanks, your request is in.</h3>
              <p className="mt-3 text-stone-600 leading-relaxed">
                We reply within one business day to book a walk-through at a time that suits you,
                usually early morning before open or right after close. If it is urgent, email
                quotes@albertaproclean.ca and put "Urgent" in the subject line.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-stone-200 bg-white p-6 sm:p-8 grid gap-5 sm:grid-cols-2 shadow-sm">
              <div>
                <label htmlFor="name" className={labelClass}>Your name</label>
                <input id="name" name="name" required className={inputClass} placeholder="First and last name" />
              </div>
              <div>
                <label htmlFor="business" className={labelClass}>Business name</label>
                <input id="business" name="business" required className={inputClass} placeholder="Store or company name" />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" name="phone" type="tel" className={inputClass} placeholder="Best number to reach you" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" name="email" type="email" required className={inputClass} placeholder="you@yourbusiness.ca" />
              </div>
              <div>
                <label htmlFor="space" className={labelClass}>Type of space</label>
                <select id="space" name="space" className={inputClass} defaultValue="Retail store">
                  <option>Retail store</option>
                  <option>Grocery or pharmacy</option>
                  <option>Office</option>
                  <option>Clinic</option>
                  <option>Restaurant</option>
                  <option>Post-construction</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>City</label>
                <select id="city" name="city" className={inputClass} defaultValue="Edmonton">
                  <option>Edmonton</option>
                  <option>Sherwood Park</option>
                  <option>St. Albert</option>
                  <option>Spruce Grove</option>
                  <option>Leduc</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="nights" className={labelClass}>How many nights a week?</label>
                <select id="nights" name="nights" className={inputClass} defaultValue="Not sure yet">
                  <option>2 nights</option>
                  <option>3 nights</option>
                  <option>5 nights</option>
                  <option>7 nights</option>
                  <option>One time clean</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="details" className={labelClass}>About the space</label>
                <textarea
                  id="details"
                  name="details"
                  rows="4"
                  className={inputClass}
                  placeholder="Rough size if you know it, number of washrooms, anything that needs special attention"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary w-full sm:w-auto">Request a quote</button>
                <p className="mt-3 text-xs text-stone-500">
                  This form sends your details to our Edmonton office. We do not share them with anyone else.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContactForm
