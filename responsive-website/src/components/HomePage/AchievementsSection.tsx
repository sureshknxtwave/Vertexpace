import React from 'react';
import { motion } from 'framer-motion';
import Modal from '../Modal/Modal'
import { useState } from 'react';

const AchievementsSection: React.FC = () => {
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
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="w-[95%] md:w-[90%] rounded-r-lg bg-[#0A2357] text-white py-12 px-6 md:py-16 md:px-12 lg:py-20 lg:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            variants={slideInFromLeft}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F47B2A] text-sm md:text-base font-bold tracking-wide">
              HAVE A LOOK
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Certifications<br />
              Counseling Success<br />
              & Institutional<br />
              Partnerships
            </h2>
            <div className="mt-4 w-20 h-1 bg-white"></div>
            <p className="text-white text-sm md:text-base lg:text-lg font-bold leading-relaxed max-w-md">
              We are ISO certified, ensuring top-quality counseling services. Over 1,000 counseling sessions and partnerships with 100+ institutions reflect our commitment to student success.
            </p>
            <button onClick={handleJoinUsClick} className="bg-[#F47B2A] hover:bg-[#E06718] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-medium transition-colors duration-300">
              START LEARNING NOW
            </button>
            <Modal
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  handleSubmit={handleSubmit}
                />
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={slideInFromRight}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center mb-8">
              <p className="text-[#F47B2A] text-sm md:text-base font-medium tracking-wide">
                OUR ACHIEVEMENTS
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
                Our Great Achievement
              </h3>
              <div className="mt-4 w-16 md:w-24 h-1 bg-white mx-auto"></div>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4 md:gap-6"
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Achievement Cards */}
              {[
                { count: '1000+', label: 'Counselling done' },
                { count: '100+', label: 'Institute associated' },
                { count: 'ISO 9001', label: '2015 Certified' },
                { count: '1000+', label: 'Students Succeeded' },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 md:p-6 text-center"
                >
                  <div className="text-[#F47B2A] text-3xl md:text-4xl lg:text-5xl font-bold">
                    {achievement.count}
                  </div>
                  <div className="text-[#0A2357] text-xs md:text-sm lg:text-base mt-2">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AchievementsSection;
