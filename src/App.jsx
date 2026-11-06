import React from 'react'
import { Helmet } from 'react-helmet-async'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/WhyChooseUs'
import ServiceArea from './components/Gallery'
import Faq from './components/Testimonials'
import ContactForm from './components/ContactForm'

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alberta ProClean Services",
    "description": "Commercial cleaning for retail stores, offices and clinics in Edmonton and area. Nightly cleaning, floor care, washroom sanitization, window cleaning and post-construction cleanup.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "telephone": "780-555-0123",
    "email": "quotes@albertaproclean.ca",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }],
    "priceRange": "$$",
    "areaServed": ["Edmonton", "Sherwood Park", "St. Albert", "Spruce Grove", "Leduc"]
  }

  return (
    <div className="min-h-screen bg-white text-stone-800">
      <Helmet>
        <title>Alberta ProClean Services | Commercial Cleaning in Edmonton and Area</title>
        <meta name="description" content="Commercial cleaning for retail stores, offices and clinics in Edmonton, Sherwood Park, St. Albert, Spruce Grove and Leduc. Nightly crews and a written checklist for every site." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <ServiceArea />
        <Faq />
        <ContactForm />
      </main>

      <footer className="bg-green-950 text-stone-200">
        <div className="container-max section-padding grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-white font-bold text-lg">Alberta ProClean Services</p>
            <p className="mt-3 text-sm leading-relaxed">
              Commercial cleaning for retail stores, offices and clinics. Crews work evenings and overnight, 7 nights a week.
            </p>
          </div>
          <div>
            <p className="text-white font-semibold">Service area</p>
            <p className="mt-3 text-sm leading-relaxed">
              Edmonton, Sherwood Park, St. Albert, Spruce Grove and Leduc.
            </p>
            <p className="mt-3 text-sm">Office hours: Monday to Friday, 8 am to 6 pm.</p>
          </div>
          <div>
            <p className="text-white font-semibold">Contact</p>
            <p className="mt-3 text-sm">Call or text: 780-555-0123</p>
            <p className="mt-1 text-sm">Email: quotes@albertaproclean.ca</p>
            <p className="mt-1 text-sm">Edmonton, Alberta</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-5 text-xs text-stone-400 flex flex-col sm:flex-row justify-between gap-2">
            <span>© 2026 Alberta ProClean Services</span>
            <a href="#quote" className="underline underline-offset-4">Request a quote</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
