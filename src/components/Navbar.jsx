import React, { useState } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how' },
  { label: 'About', href: '#about' },
  { label: 'Service area', href: '#area' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-stone-200">
      <div className="bg-green-950 text-white text-sm">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap gap-x-6 gap-y-1 justify-between">
          <span>Commercial cleaning, Edmonton and area</span>
          <span>
            Call or text <a href="tel:7805550123" className="font-semibold underline underline-offset-4">780-555-0123</a>
          </span>
        </div>
      </div>
      <nav className="container-max px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top" className="leading-tight">
          <span className="block font-extrabold text-lg text-green-950 tracking-tight">Alberta ProClean</span>
          <span className="block text-xs uppercase tracking-widest text-stone-500">Services</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-green-900">{link.label}</a>
          ))}
          <a href="#quote" className="btn-primary py-2 px-4 text-sm">Get a quote</a>
        </div>
        <button
          className="md:hidden border border-stone-300 rounded-md px-3 py-2 text-sm font-medium"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-stone-200 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href="#quote" onClick={() => setOpen(false)} className="text-green-900 font-semibold">Get a quote</a>
        </div>
      )}
    </header>
  )
}

export default Navbar
