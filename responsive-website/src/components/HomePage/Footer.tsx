import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-[#0A2357] text-white font-bold"
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20"
        >
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img 
              src={require("../../utils/logo.png")}
              alt="Logo" 
              className="h-[60px] w-[140px] mb-6 mx-auto md:mx-0" 
            />
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 max-w-sm mx-auto md:mx-0">
            ScholarPath is a leading education consultancy helping students achieve their academic and career goals.
            </p>
            <div className="bg-[#0A2357] py-3 font-bold hidden md:block">
              <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/vertexpace" className="text-white hover:text-gray-200">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  
                  <a href="https://www.instagram.com/vertexpace/" className="text-white hover:text-gray-200">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-md md:text-lg font-semibold mb-6 relative pb-2 inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white"></span>
            </h4>
            <ul className="space-y-4">
              <motion.li
                
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xs md:text-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/what-we-do" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xs md:text-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top
                >
                  What we do
                </Link>
              </motion.li>
              <motion.li
                
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/colleges" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xs md:text-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top
                >
                  Colleges
                </Link>
              </motion.li>
              <motion.li
                
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-xs md:text-sm"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Smooth scroll to top
                >
                  Contact us
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h4 className="text-md md:text-lg font-semibold mb-6 relative pb-2 inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white"></span>
            </h4>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300 justify-center md:justify-start text-xs md:text-sm">
                <FontAwesomeIcon icon={faPhone} className="mr-3" />
                +91 9620201058
              </p>
              <p className="flex items-center text-gray-300 justify-center md:justify-start text-xs md:text-sm">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                info@scholarpath.com
              </p>
              <p className="flex items-start text-gray-300 justify-center md:justify-start text-xs md:text-sm">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 mt-1" />
                <span>
                  No. 38/2 2nd Floor, 18th Main, 9th Block, Jayanagar, Bangalore, Karnataka-560041
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 md:mt-12 pt-8"
        >
         <div className="flex flex-col justify-center items-center h-full space-y-4 md:space-y-0">
          <p className="text-xs text-white text-center">
            Copyright © 2024 ScholarPath. All rights reserved.
          </p>
        </div>

        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
