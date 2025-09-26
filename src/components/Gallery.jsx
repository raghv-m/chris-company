import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, X, ArrowLeft, ArrowRight } from 'lucide-react'

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      id: 1,
      title: 'Superstore Floor Transformation',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Complete floor restoration at Real Canadian Superstore - from dull and stained to sparkling clean'
    },
    {
      id: 2,
      title: 'Shoppers Drug Mart Windows',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Crystal clear windows at Shoppers Drug Mart - streak-free professional cleaning'
    },
    {
      id: 3,
      title: 'No Frills Deep Clean',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Comprehensive deep cleaning transformation at No Frills location'
    },
    {
      id: 4,
      title: 'Retail Store Shelving',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Professional shelf and fixture cleaning - dust-free and pristine'
    },
    {
      id: 5,
      title: 'Entrance Area Makeover',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Store entrance cleaning - creating welcoming first impressions'
    },
    {
      id: 6,
      title: 'Complete Store Revival',
      before: '/api/placeholder/400/300',
      after: '/api/placeholder/400/300',
      description: 'Total store transformation - every surface cleaned to perfection'
    }
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
            Before & After Transformations
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            See the dramatic difference our professional cleaning makes. 
            From dusty and dull to spotless and sparkling.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                {/* Before/After Slider Effect */}
                <div className="relative h-64">
                  {/* Placeholder for Before Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-gray-600 font-bold mb-2">BEFORE</div>
                      <div className="text-sm text-gray-500">Retail Space Needs Cleaning</div>
                    </div>
                  </div>
                  
                  {/* Placeholder for After Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-emerald-700 font-bold mb-2">AFTER</div>
                      <div className="text-sm text-emerald-600">Professional Clean Result</div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="bg-white rounded-full p-3">
                        <Eye className="w-6 h-6 text-emerald-600" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-bold text-navy-700 mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>

                {/* Before/After Labels */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    BEFORE
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    AFTER
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-xl font-bold text-navy-700">{selectedImage.title}</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  {/* Before Image */}
                  <div>
                    <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg h-64 flex items-center justify-center mb-2">
                      <div className="text-center">
                        <div className="text-gray-600 font-bold mb-2">BEFORE</div>
                        <div className="text-sm text-gray-500">Original State</div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 font-medium">Before Professional Cleaning</p>
                  </div>

                  {/* After Image */}
                  <div>
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg h-64 flex items-center justify-center mb-2">
                      <div className="text-center">
                        <div className="text-emerald-700 font-bold mb-2">AFTER</div>
                        <div className="text-sm text-emerald-600">Professional Result</div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-emerald-600 font-medium">After Alberta ProClean Service</p>
                  </div>
                </div>

                <p className="text-gray-700 text-center">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-navy-700 mb-4">
            Ready to Transform Your Store?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same dramatic transformation for your retail space. 
            Professional cleaning that makes a visible difference.
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
            Schedule Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery