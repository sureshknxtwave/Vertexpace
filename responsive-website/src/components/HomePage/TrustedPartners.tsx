import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const partners = [
  require('../../utils/reva-removebg-preview.png'),
  require('../../utils/rama-removebg-preview.png'),
  require('../../utils/nitt-removebg-preview.png'),
  require('../../utils/presi-removebg-preview.png'),
  require('../../utils/christ-removebg-preview.png'),
];

const TrustedPartners: React.FC = () => {
  return (
    <motion.section
      className="py-12 md:py-[180px] bg-white font-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // Trigger animation only once when it enters the viewport
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.span
            className="text-orange-500 font-bold text-lg md:text-xl uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Trusted By
          </motion.span>

          <motion.h2
            className="text-3xl md:text-2xl lg:text-4xl font-bold text-blue-900 mt-2 md:mt-3 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            100+ Leading Colleges And Universities
          </motion.h2>

          {/* Bar line below the heading */}
          <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto"></div>

          <motion.p
            className="text-gray-700 text-base md:text-lg mt-6 md:mt-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Trusted by leading colleges and universities, Vertexpace is recognized for its reliability and commitment.
          </motion.p>
        </div>

        {/* Partners Grid - Mobile */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-300"
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Slider - Desktop */}
        <motion.div
          className="hidden md:flex justify-center items-center space-x-12 mt-12 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div className="flex space-x-12 animate-scroll">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TrustedPartners;
