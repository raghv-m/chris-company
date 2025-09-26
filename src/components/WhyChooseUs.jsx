import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  GraduationCap, 
  Leaf, 
  Clock, 
  Award, 
  Shield,
  Star,
  CheckCircle
} from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: GraduationCap,
      title: 'Certified & Trained Staff',
      description: 'WHMIS certified professionals with specialized infection control training and ongoing education in the latest cleaning protocols.',
      benefits: ['WHMIS Certification', 'Infection Control Experts', 'Continuous Training', 'Background Checked']
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Practices',
      description: 'Green Seal certified products and zero-waste approach that protects your customers, staff, and the environment.',
      benefits: ['Green Seal Certified', 'Biodegradable Products', 'Zero-Waste Programs', 'Energy Efficient']
    },
    {
      icon: Clock,
      title: 'Customized Schedules',
      description: 'Flexible scheduling designed around retail hours with 24/7 emergency response for urgent cleaning needs.',
      benefits: ['Flexible Hours', '24/7 Emergency Response', 'After-Hours Service', 'Holiday Coverage']
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Trusted by major retail chains across Alberta with over 200 locations served and countless satisfied partners.',
      benefits: ['200+ Locations Served', 'Major Chain Partners', '98% Client Retention', '15+ Years Experience']
    },
    {
      icon: Shield,
      title: 'Satisfaction Guarantee',
      description: 'Complete satisfaction guaranteed with free re-cleaning if you\'re not 100% satisfied with our service.',
      benefits: ['100% Satisfaction Guaranteed', 'Free Re-clean Promise', 'Quality Assurance', 'Performance Monitoring']
    }
  ]

  const clientLogos = [
    { name: 'Shoppers Drug Mart', width: 'w-32' },
    { name: 'Real Canadian Superstore', width: 'w-36' },
    { name: 'No Frills', width: 'w-28' },
    { name: 'Real Canadian Liquorstore', width: 'w-40' },
    { name: 'Other Retail Partners', width: 'w-32' }
  ]

  const stats = [
    { number: '20%', description: 'Increase in foot traffic for clean stores' },
    { number: '85%', description: 'Customer satisfaction improvement' },
    { number: '30%', description: 'Reduction in cleaning-related complaints' }
  ]

  return (
    <section className="section-padding bg-navy-700 text-white overflow-hidden" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Alberta ProClean Stands Above the Rest
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 leading-relaxed">
            Experience the difference that professional expertise, eco-friendly practices, 
            and unwavering commitment to excellence can make for your retail business
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500 rounded-xl p-3 flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-emerald-100 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-sm text-emerald-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research-Based Benefits */}
        <motion.div
          className="bg-emerald-500 rounded-2xl p-8 lg:p-12 mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              The Impact of Professional Cleaning
            </h3>
            <p className="text-emerald-100 text-lg">
              Research shows that professional cleaning delivers measurable business benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/20 rounded-xl p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-100 font-medium">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold mb-8">Trusted by Leading Retail Chains</h3>
          
          {/* Logo placeholders */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-8">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-4 ${client.width} h-16 flex items-center justify-center border border-white/20`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-sm">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="flex items-center justify-center space-x-2 text-emerald-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-emerald-100 mt-2">
              <strong>Served 200+ Alberta Locations</strong> • 4.9/5 Average Rating
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Experience the Alberta ProClean Difference
          </h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful retail partners who trust us with their cleaning needs. 
            See why we're Alberta's #1 choice for commercial retail cleaning.
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
            Start Your Partnership Today
          </motion.button>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"></div>
    </section>
  )
}

export default WhyChooseUs