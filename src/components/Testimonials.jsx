import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Sarah Martinez',
      position: 'Store Manager',
      company: 'Real Canadian Superstore',
      rating: 5,
      text: 'Alberta ProClean transformed our superstore completely! Their attention to detail is remarkable, and our customers have definitely noticed the difference. Spotless every time!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Michael Chen',
      position: 'District Manager',
      company: 'Shoppers Drug Mart',
      rating: 5,
      text: 'Reliable service for our busy Drug Mart locations. The team works efficiently during our off-hours and never disrupts our operations. Professional and thorough.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Jennifer Wilson',
      position: 'Operations Coordinator',
      company: 'No Frills',
      rating: 5,
      text: 'Outstanding cleaning service! They understand the unique challenges of high-traffic retail spaces. Our stores have never looked better, and the eco-friendly approach is a bonus.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'David Thompson',
      position: 'Facility Manager',
      company: 'Real Canadian Liquorstore',
      rating: 5,
      text: 'Professional, reliable, and thorough. Alberta ProClean has exceeded our expectations in every aspect. Their team is well-trained and uses excellent products.',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Regional Manager',
      company: 'Metro Alberta',
      rating: 5,
      text: 'The best commercial cleaning service we\'ve worked with in Alberta. Consistent quality, flexible scheduling, and excellent customer service. Highly recommended!',
      image: '/api/placeholder/60/60'
    },
    {
      name: 'Robert Kim',
      position: 'Store Owner',
      company: 'Independent Grocery',
      rating: 5,
      text: 'Game-changing service for our store! Customer compliments have increased significantly since we started with Alberta ProClean. Worth every penny.',
      image: '/api/placeholder/60/60'
    }
  ]

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 mb-6">
            What Our Retail Partners Say
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what leading retail chains across Alberta 
            say about our commercial cleaning services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg card-hover relative"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-emerald-500 rounded-full p-2">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-navy-700">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-emerald-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating Section */}
        <motion.div
          className="bg-navy-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Trusted by 200+ Retail Locations Across Alberta
            </h3>
            
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-3xl font-bold ml-4">4.9/5</span>
            </div>
            
            <p className="text-emerald-100 text-lg mb-6">
              Average rating from 127+ verified retail partners
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-emerald-200">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
                <div className="text-emerald-200">Stores Cleaned Monthly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
                <div className="text-emerald-200">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-emerald-200">Emergency Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-navy-700 mb-4">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of service that has earned us consistently high ratings 
            from retail partners across Alberta.
          </p>
          <motion.button
            className="btn-primary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Your Free Quote Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials