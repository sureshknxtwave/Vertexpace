import React from 'react';
import { motion } from 'framer-motion';
import {useState} from 'react'
import '../../styles/MainSection.css';
import Modal from '../Modal/Modal'

const MainSection: React.FC = () => {

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
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 }, // Slide into position
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: { opacity: 1, x: 0 }, // Slide into position
  };

  return (
    <motion.section
      className="min-h-[620px] md:min-h-[800px] flex items-center py-12 md:py-0"
      style={{
        backgroundColor: '#0A2357',
        backgroundImage: ` url(${require('../../utils/bannerImage.png')}),linear-gradient(rgba(10, 35, 87, 0.8), rgba(10, 35, 87, 0.8))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}
      initial="hidden"
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center px-4 md:px-8 gap-12 text-white font-bold">
        {/* Left Section */}
        <motion.div
          className="flex flex-col text-center md:text-left max-w-xl"
          variants={slideInLeft}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome To <span className="text-orange-500">Vertexpace!</span>
          </h1>
          <p className="text-base md:text-[16px] mb-8 leading-relaxed text-gray-200">
            "The function of education is to teach one to think intensively and to think critically. Intelligence and character – that is the goal of true education."
            <br className="hidden md:block" />
            <span className="block mt-4 pl-20 text-white font-bold">- Martin Luther King</span>
          </p>
          <button onClick={handleJoinUsClick} className="bg-orange-500 hover:bg-orange-600 border-non text-white text-[11px] px-6 py-3 rounded-lg text-base font-bold transition-colors duration-300 mx-auto md:mx-0 w-[190px]">
            GET STARTED
          </button>
          <Modal
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  handleSubmit={handleSubmit}
                />
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="relative mt-8 md:mt-0"
          variants={slideInRight}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src={require('../../utils/banner.jpg')}
            alt="Graduation"
            className="rounded-full w-56 h-56 md:w-96 md:h-96 object-cover border-4 border-white shadow-lg"
          />
          {/* Spinning Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="circle-animation w-56 h-56 md:w-[27rem] md:h-[27rem]"></div>
          </div>

          {/* Optional Glowing Effect */}
          <div className="absolute inset-0 rounded-full bg-orange-500 opacity-10 blur-xl"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainSection;
