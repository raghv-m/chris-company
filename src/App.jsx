import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  // Schema.org structured data for local business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alberta ProClean Services",
    "image": "https://albertaproclean.ca/logo.jpg",
    "description": "Professional commercial cleaning services for retail stores across Alberta, specializing in Shoppers Drug Mart, Real Canadian Superstore, and No Frills locations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edmonton",
      "addressLocality": "Edmonton",
      "addressRegion": "AB",
      "postalCode": "T5J 0A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.5444,
      "longitude": -113.4909
    },
    "telephone": "780-555-0123",
    "email": "info@albertaproclean.ca",
    "url": "https://albertaproclean.ca",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }],
    "serviceArea": {
      "@type": "State",
      "name": "Alberta"
    },
    "priceRange": "$$",
    "areaServed": ["Edmonton", "Calgary", "Alberta"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Commercial Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Retail Store Cleaning",
            "description": "Professional cleaning services for retail chains like Shoppers Drug Mart and Real Canadian Superstore"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Floor Care Services",
            "description": "Deep cleaning and polishing for high-traffic retail store floors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window and Glass Cleaning",
            "description": "Streak-free cleaning for retail store windows and glass displays"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Restroom Sanitization",
            "description": "Professional disinfection and sanitization of retail store restrooms"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <Helmet>
        <title>Alberta ProClean Services | Professional Commercial Retail Cleaning in Alberta</title>
        <meta 
          name="description" 
          content="Expert commercial cleaning for retail stores like Shoppers Drug Mart & Real Canadian Superstore. Eco-friendly, reliable services across Alberta. Book now!" 
        />
        <meta 
          name="keywords" 
          content="commercial cleaning Alberta, retail store cleaning, Shoppers Drug Mart cleaning, No Frills janitorial services, Real Canadian Superstore cleaning, Edmonton cleaning services" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Alberta ProClean Services | Professional Commercial Retail Cleaning" />
        <meta property="og:description" content="Expert commercial cleaning for retail stores like Shoppers Drug Mart & Real Canadian Superstore. Eco-friendly, reliable services across Alberta." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://albertaproclean.ca" />
        <meta property="og:image" content="https://albertaproclean.ca/og-image.jpg" />
        <meta property="og:site_name" content="Alberta ProClean Services" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Alberta ProClean Services | Professional Commercial Retail Cleaning" />
        <meta name="twitter:description" content="Expert commercial cleaning for retail stores like Shoppers Drug Mart & Real Canadian Superstore. Eco-friendly, reliable services across Alberta." />
        <meta name="twitter:image" content="https://albertaproclean.ca/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Alberta ProClean Services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://albertaproclean.ca" />
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Edmonton, Alberta" />
        <meta name="geo.position" content="53.5444;-113.4909" />
        <meta name="ICBM" content="53.5444, -113.4909" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="why-us">
            <WhyChooseUs />
          </section>
          
          <section id="testimonials">
            <Testimonials />
          </section>
          
          <section id="gallery">
            <Gallery />
          </section>
          
          {/* <section id="map">
            <MapSection />
          </section> */}
          
          <section id="contact">
            <ContactForm />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App