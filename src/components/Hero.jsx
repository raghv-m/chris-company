import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Award, Phone } from 'lucide-react';
import bannerImage from '../assets/banner.jpg'; // Adjust path if necessary

const Hero = () => {
  const [imageFailed, setImageFailed] = useState(false); // State to track if image fails

  // Smooth scroll function
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: 'Eco-Certified' },
    { icon: Star, text: 'Serving Alberta Since 2010' },
  ];

  // Debug: Log the image path
  console.log('Banner Image Path:', bannerImage);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImage})`, // Use imported image as background
        }}
      >
        {/* Overlay ("black film" - semi-transparent gradient) */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-green-900/70"></div>
      </div>

      {/* Fallback Placeholder (shows only if image fails) */}
      {imageFailed && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-green-400 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/50 rounded-full"></div>
          </div>
        </div>
      )}

      {/* Hidden img to detect load failure (without displaying it) */}
      <img
        src={bannerImage}
        alt="Banner preload"
        className="hidden"
        onError={() => {
          console.error('Failed to load banner image');
          setImageFailed(true);
        }}
        onLoad={() => setImageFailed(false)}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Spotless Retail Spaces Across{' '}
            <span className="text-green-400">Alberta</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-200 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Shoppers Drug Mart & More
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional commercial cleaning for retail giants like Real Canadian Superstore and No Frills.
            Eco-friendly solutions with 24/7 service across Alberta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() => handleScroll('#contact')}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-all duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              onClick={() => handleScroll('#services')}
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Services</span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <badge.icon className="w-5 h-5 text-green-400" />
                </div>
                <span className="font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 inline-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center justify-center space-x-4 text-white">
              <Phone className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold">Call Now: 780-555-0123</span>
            </div>
            <p className="text-gray-300 text-sm mt-1">24/7 Emergency Response Available</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 transform -translate-x-1/2 text-white z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col  ">
          <span className="text-sm font-medium  left-1/2 x"></span>
          <div className="w-1 h-8 bg-white/50 rounded-full relative">
            <motion.div
              className="w-1 h-2  left-1/2  bg-green-400 rounded-full absolute top-0"
              animate={{ y: [0, 24, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;