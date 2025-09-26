import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Sparkles, 
  Droplets, 
  Shield, 
  Brush, 
  Clock, 
  Leaf,
  ChevronRight,
  Check
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedService, setSelectedService] = useState(0)

  const services = [
    {
      icon: Sparkles,
      title: 'Retail Floor Care',
      description: 'Deep cleaning and polishing for high-traffic areas',
      features: [
        'Deep scrubbing and buffing for No Frills aisles',
        'Anti-slip treatments for safety compliance',
        'Specialized cleaning for different flooring types',
        'Scheduled maintenance programs'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Droplets,
      title: 'Window & Glass Cleaning',
      description: 'Streak-free cleaning for crystal-clear displays',
      features: [
        'Streak-free cleaning for Shoppers Drug Mart displays',
        'Interior and exterior window cleaning',
        'Glass door and partition maintenance',
        'UV protection treatments available'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Shield,
      title: 'Restroom & Sanitization',
      description: 'Professional disinfection protocols',
      features: [
        'Hospital-grade disinfection for Real Canadian Liquorstore',
        'Touchpoint sanitization protocols',
        'Odor elimination treatments',
        'Supply restocking services'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Brush,
      title: 'Shelf & Fixture Dusting',
      description: 'Custom cleaning for retail layouts',
      features: [
        'Custom cleaning for Superstore layouts',
        'Product-safe dusting techniques',
        'Display case interior cleaning',
        'Fixture maintenance and repair'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Clock,
      title: 'After-Hours Deep Cleans',
      description: 'Comprehensive cleaning with minimal disruption',
      features: [
        'Scheduled during non-business hours',
        'Complete store sanitization',
        'Equipment deep cleaning',
        'Emergency response available'
      ],
      image: '/api/placeholder/400/300'
    },
    {
      icon: Leaf,
      title: 'Eco-Green Options',
      description: 'Environmentally responsible cleaning solutions',
      features: [
        'Green Seal certified biodegradable products',
        'Zero-waste cleaning programs',
        'Energy-efficient equipment',
        'Sustainable supply chain practices'
      ],
      image: '/api/placeholder/400/300'
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
            Tailored Cleaning Solutions for Retail Stores
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive cleaning services designed specifically for retail environments, 
            ensuring spotless stores that enhance customer experience
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
                selectedService === index 
                  ? 'bg-navy-700 text-white shadow-2xl transform scale-105' 
                  : 'bg-white hover:shadow-xl hover:transform hover:-translate-y-1'
              }`}
              onClick={() => setSelectedService(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: selectedService === index ? 1.05 : 1.02 }}
            >
              <div className={`rounded-full w-16 h-16 mb-4 flex items-center justify-center ${
                selectedService === index 
                  ? 'bg-emerald-500' 
                  : 'bg-emerald-100'
              }`}>
                <service.icon className={`w-8 h-8 ${
                  selectedService === index 
                    ? 'text-white' 
                    : 'text-emerald-600'
                }`} />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className={`mb-4 ${
                selectedService === index 
                  ? 'text-emerald-100' 
                  : 'text-gray-600'
              }`}>
                {service.description}
              </p>
              
              <div className={`flex items-center font-medium ${
                selectedService === index 
                  ? 'text-emerald-300' 
                  : 'text-emerald-600'
              }`}>
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Service View */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          key={selectedService}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
                  {React.createElement(services[selectedService].icon, { 
                    className: "w-6 h-6 text-white" 
                  })}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-700">
                  {services[selectedService].title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {services[selectedService].description}. Our specialized approach ensures 
                your retail space maintains the highest standards of cleanliness and presentation.
              </p>

              <div className="space-y-3">
                <h4 className="text-lg font-bold text-navy-700 mb-4">What's Included:</h4>
                {services[selectedService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="bg-emerald-500 rounded-full p-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="btn-primary mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Request Quote for This Service
              </motion.button>
            </motion.div>

            {/* Service Image Placeholder */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-emerald-100 to-navy-100 rounded-xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  {React.createElement(services[selectedService].icon, { 
                    className: "w-24 h-24 text-emerald-600 mx-auto mb-4" 
                  })}
                  <h4 className="text-2xl font-bold text-navy-700 mb-2">
                    Professional {services[selectedService].title}
                  </h4>
                  <p className="text-gray-600">
                    High-quality service illustration
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-full w-8 h-8"></div>
              <div className="absolute -bottom-4 -left-4 bg-navy-700 rounded-full w-6 h-6"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-navy-700 mb-4">
            Ready to Transform Your Retail Space?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a customized cleaning plan that fits your store's unique needs and schedule. 
            Join hundreds of satisfied retail partners across Alberta.
          </p>
          <motion.button
            className="btn-secondary text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get Your Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services