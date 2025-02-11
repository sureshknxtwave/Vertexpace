import React from 'react';
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import '../../styles/ServicesSection.css'; // CSS file for custom styling

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      className="min-h-screen py-10 md:py-14 bg-gray-50 font-bold"
      initial={{ opacity: 0, x: -100 }} // Initial position off to the left
      whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
      transition={{ duration: 0.5 }} // Add a smooth transition effect
      viewport={{ once: true }} // Trigger the animation only once when it enters the viewport
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-between">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-12 mb-12">
          <div className="text-center md:text-left w-full md:w-auto mb-6 md:mb-0">
            <span className="text-orange-500 font-bold text-base md:text-lg uppercase tracking-wide">
              Our Services
            </span>
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mt-2 leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What We Provide For Your Success.
            </motion.h2>
            <div className="mt-4 w-16 h-1 bg-blue-900 mx-auto md:mx-0"></div>
          </div>
          <div className="max-w-xl text-center md:text-left">
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
              We provide end-to-end support to help you achieve your academic and career goals.
            </p>
            <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
              With personalized guidance and seamless support, we ensure a smooth journey to secure your future.
            </p>
            <Link to="/what-we-do"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <button  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg mt-6 text-sm font-bold transition-all duration-300 transform hover:scale-105">
              KNOW MORE
            </button>
            </Link>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {[{ title: 'Psychometric Test', icon: '🧠', description: 'Evaluate your strengths and personality traits to guide career decisions.' },
            { title: 'Career Counselling', icon: '👥', description: 'Expert advice for choosing the right career path.' },
            { title: 'Admission Guidance', icon: '📚', description: 'Get help with admission processes and forms.' },
            { title: 'Application And Documentation', icon: '📝', description: 'Guidance on completing applications and paperwork.' },
            { title: 'Secured Admission', icon: '🎓', description: 'Ensuring admissions in top universities.' }].map((service, index) => (
              <Link
                to={`/what-we-do#${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setTimeout(() => {
                  const element = document.getElementById(service.title.replace(/\s+/g, '-').toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100)} // Small delay to allow React Router to update
              >
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, x: -100 }} // Initial position off to the left
              whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each animation slightly
              viewport={{ once: true }} // Trigger the animation only once when it enters the viewport
            >
              <div className="card-inner">
                {/* Front Face */}
                <div className="card-face card-front">
                  <div className="flex flex-col items-center">
                    <span className="text-4xl text-blue-900 mb-4">{service.icon}</span>
                    <h3 className="text-blue-900 font-medium text-lg text-center">{service.title}</h3>
                  </div>
                </div>
                {/* Back Face */}
                <div className="card-face card-back">
                  <p className="text-center text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
