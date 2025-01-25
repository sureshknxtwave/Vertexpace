// src/components/WhyChooseSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal/Modal'
import { useState } from 'react';

const WhyChooseSection: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
      const handleJoinUsClick = () => {
        setIsModalOpen(true); // Open modal when button is clicked
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
      };
    
      const handleSubmit = (formData: { name: string; email: string; phone: string; subject: string; message: string }) => {
        console.log('Form submitted with data:', formData);
        // You can replace this with logic for sending data to an API
        handleCloseModal(); // Close the modal after submission
      };
  return (
    <motion.section
      className="md:h-[850px] h:auto text-white relative font-bold py-12 md:py-20"
      style={{
        backgroundImage: `url(${require('../../utils/whychoosebg.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }} // Trigger animation only once when the element enters the view
    >
      <div className="absolute inset-0 bg-blue-900/90"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose Vertexpace?
          </motion.h2>
          <div className="mt-4 mb-3 w-24 h-1 bg-white mx-auto"></div>

          <motion.p
            className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 md:mb-10 text-gray-200 px-4 md:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vertexpace is dedicated to empowering students and their families, turning the often-complicated admission process into a manageable and rewarding experience. With us by your side, achieving admission to your dream school, college, or university becomes smoother and more attainable.
          </motion.p>

          {/* Desktop Features */}
          <div className="hidden md:flex justify-center items-center space-x-8 mb-10">
            <motion.span
              className="text-sm md:text-base lg:text-lg font-medium"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Personalized Attention
            </motion.span>
            <span className="text-gray-400">|</span>
            <motion.span
              className="text-sm md:text-base lg:text-lg font-medium"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Streamlined & Efficient Process
            </motion.span>
            <span className="text-gray-400">|</span>
            <motion.span
              className="text-sm md:text-base lg:text-lg font-medium"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Reliable & Consistent Results
            </motion.span>
          </div>

          {/* Mobile Features */}
          <div className="flex flex-col space-y-4 md:hidden mb-8">
            <motion.span
              className="text-sm font-medium py-2 px-4 bg-blue-800/50 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Personalized Attention
            </motion.span>
            <motion.span
              className="text-sm font-medium py-2 px-4 bg-blue-800/50 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Streamlined & Efficient Process
            </motion.span>
            <motion.span
              className="text-sm font-medium py-2 px-4 bg-blue-800/50 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Reliable & Consistent Results
            </motion.span>
          </div>

          <motion.button
          onClick={handleJoinUsClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg text-sm md:text-base lg:text-lg font-medium mb-12 md:mb-16 transition-all duration-300 transform hover:scale-105"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            JOIN US NOW
          </motion.button>

          <Modal
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  handleSubmit={handleSubmit}
                />

          <div className="relative px-4 md:px-0">
            {/* Main Image */}
            <div className="relative z-10 overflow-hidden border-white rounded-lg">
              <motion.img
                src={require('../../utils/whychoose.jpg')}
                alt="Students"
                className="border-2 border-white w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              />

              {/* Optional: Add overlay on hover */}
              <div className="absolute inset-0 bg-blue-900/10 hover:bg-blue-900/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseSection;
