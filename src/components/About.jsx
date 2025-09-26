import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, TrendingUp, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '500+', label: 'Stores Cleaned Monthly', icon: TrendingUp },
    { number: '98%', label: 'Client Retention Rate', icon: Heart },
    { number: '15+', label: 'Years of Experience', icon: Users },
    { number: '24/7', label: 'Emergency Response', icon: Target }
  ]

  const values = [
    { icon: Users, title: 'Reliability', description: 'Consistent, dependable service you can trust' },
    { icon: Heart, title: 'Sustainability', description: 'Eco-friendly products and zero-waste practices' },
    { icon: Target, title: 'Expertise', description: 'Specialized knowledge in retail cleaning' }
  ]

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-700 mb-6">
            Your Alberta-Based Commercial Cleaning Experts
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Delivering pristine retail environments that enhance customer satisfaction and drive business success across Alberta
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-navy-700 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in Edmonton in 2010, Alberta ProClean Services began with a simple mission: 
                to provide unmatched commercial cleaning services that help Alberta's retail businesses thrive. 
                What started as a small local operation has grown into the province's most trusted name in retail cleaning.
              </p>
              <p>
                Over 15 years, we've built lasting partnerships with major retail chains including Shoppers Drug Mart, 
                Real Canadian Superstore, and No Frills. Our commitment to excellence and eco-friendly practices has 
                earned us the trust of over 500 locations across Alberta.
              </p>
              <p>
                Today, we combine cutting-edge cleaning technologies with time-tested methods to deliver results that 
                exceed expectations. Every cleaned space tells a story of our dedication to creating inviting, hygienic 
                environments that customers love to visit.
              </p>
            </div>
          </motion.div>

          {/* Team Photo Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-navy-700 to-emerald-500 rounded-2xl p-8 text-center text-white">
              <div className="bg-white/20 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-16 h-16" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Professional Team</h4>
              <p className="text-emerald-100">
                Certified cleaning professionals trained in retail-specific protocols and eco-friendly practices
              </p>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-full w-8 h-8"></div>
            <div className="absolute -bottom-4 -left-4 bg-navy-700 rounded-full w-6 h-6"></div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <div className="bg-emerald-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-navy-700 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Values */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-navy-700 mb-6">Our Mission</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 leading-relaxed mb-6">
                To deliver exceptional commercial cleaning services that create pristine, welcoming retail environments. 
                We're committed to supporting Alberta's retail businesses with reliable, eco-friendly solutions that 
                enhance customer experience and contribute to business success.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                <p className="text-emerald-700 font-medium">
                  "Clean stores increase foot traffic by 20% and boost customer satisfaction scores significantly."
                </p>
                <p className="text-emerald-600 text-sm mt-2">- Retail Industry Research</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-navy-700 mb-6">Our Core Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                    <value.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-700 mb-1">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About