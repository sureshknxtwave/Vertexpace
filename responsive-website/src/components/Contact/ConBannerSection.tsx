import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import '../../styles/ContactSection.css';

const ConBannerSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      toast.error('Name is required.');
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }
    if (!phoneRegex.test(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error('Subject is required.');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Message is required.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .send(
        "service_cfz72df",
        "template_q0o0fwi",
        formData,
        "HHJBhCCgqaBV-6xEZ"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          toast.error("Failed to send message.");
          console.log("FAILED...", error);
        }
      );
  };

  
  return (
    <div className="contact-section bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#F47B2A] text-sm font-bold mb-2 tracking-wide">
              GET IN TOUCH WITH US
            </p>
            <h2 className="text-[#0A2357] text-3xl font-bold mb-4 leading-tight">
              Feel Free To Contact And<br />
              Reach Us For More Info!
            </h2>
            <div className="w-12 h-1 bg-[#0A2357] mb-6"></div>
            <p className="text-gray-600 font-bold mb-12">
              Reach out for expert guidance, personalized support, and<br />
              reliable solutions on your academic journey today.
            </p>


            {/* Contact Details */}
        <div className="grid grid-cols-1 gap-6">
        {/* Location */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
            <div className="contact-icon-wrapper">
              <div className="bg-[#F47B2A] p-4 m-1 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-[#0A2357] text-center md:text-start font-semibold mb-1">Location Address :</h3>
              <p className="text-gray-600 text-center md:text-start">4th T Block Jayanagar, Bangalore - 560041</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
  {/* Phone */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-white p-6 md:p-[55px] rounded-lg shadow-md w-72 h-72 flex items-center justify-center"
  >
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="contact-icon-wrapper">
        <div className="bg-[#F47B2A] p-4 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-[#0A2357] font-semibold mb-1">Phone Numbers :</h3>
        <p className="text-gray-600">+91 9620208058</p>
      </div>
    </div>
  </motion.div>

  {/* Email */}
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="bg-white p-6 md:p-[55px] rounded-lg shadow-md w-72 h-72 flex items-center justify-center"
  >
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="contact-icon-wrapper">
        <div className="bg-[#F47B2A] p-4 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      <div>
        <h3 className="text-[#0A2357] text-center font-semibold mb-1">Email Address :</h3>
        <p className="text-gray-600 text-center">info@vertexspace.com</p>
      </div>
    </div>
  </motion.div>
</div>

        </div>

        
          </motion.div>

          {/* Right Section - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-10 rounded-lg shadow-lg"
          >
            <p className="text-[#F47B2A] text-sm font-medium mb-2 tracking-wide">
              CONTACT US
            </p>
            <h2 className="text-[#0A2357] text-3xl font-bold mb-4">
              Send Your Message
            </h2>
            <div className="w-12 h-1 bg-[#0A2357] mb-6"></div>
            <p className="text-gray-600 mb-8">
              Our team is ready to answer all your questions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name.."
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#F8F9FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47B2A]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email.."
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#F8F9FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47B2A]"
              />

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone No.."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#F8F9FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47B2A]"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject.."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#F8F9FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47B2A]"
                />
              </div>

              <textarea
                name="message"
                placeholder="Enter Your Message.."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-[#F8F9FA] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F47B2A]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#F47B2A] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#E06718] transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ConBannerSection;









