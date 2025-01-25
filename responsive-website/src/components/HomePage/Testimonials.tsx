import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const testimonials = [
  {
    name: 'Roberto Esquire',
    designation: 'Designation',
    image: require('../../utils/men.jpg'),
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Courtney Henry',
    designation: 'Designation',
    image: require('../../utils/women.jpg'),
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'John Doe',
    designation: 'CEO of Example Corp',
    image: require('../../utils/women2.jpeg'),
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    name: 'Emily Rose',
    designation: 'Lead Developer at TechHub',
    image: require('../../utils/women3.jpeg'),
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalTestimonials = testimonials.length;

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    if (currentIndex + testimonialsPerPage < totalTestimonials) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    } else {
      setCurrentIndex(0); // Reset to the first testimonial if at the end
    }
  };

  // Automatically move to the next testimonial every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 2000); // Change testimonials every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Only re-run when currentIndex changes

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index * testimonialsPerPage);
  };

  return (
    <motion.section
      className="py-12 md:py-20 bg-white"
      initial={{ opacity: 0, x: -100 }} // Initial position off to the left
      animate={{ opacity: 1, x: 0 }} // Animate to the original position
      transition={{ duration: 0.6 }} // Duration for the sliding effect
    >
      <div className="container mx-auto px-4 md:px-6 bg-white rounded-lg shadow-md py-8">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Header */}
          <span className="text-orange-500 font-semibold text-lg md:text-xl uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mt-2 md:mt-3 leading-tight">
            What Our Clients Say About Vertexpace
          </h2>

          {/* Bar line */}
          <div className="mt-4 w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-6">
          {currentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl rounded-2xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-1 mb-6 md:mb-0"
              initial={{ opacity: 0, x: -50 }} // Initial position off to the left for each card
              animate={{ opacity: 1, x: 0 }} // Animate to the original position
              transition={{ duration: 0.5, delay: index * 0.2 }} // Slight delay for each card
            >
              {/* Quote Icon */}
              <div className="text-orange-500 mb-6">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                {/* Image */}
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-gray-50 shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-orange-500 opacity-50 transform scale-110"></div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-auto">
                    <h4 className="text-lg md:text-xl font-bold text-blue-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm md:text-base">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array(Math.ceil(totalTestimonials / testimonialsPerPage)).fill(0).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex / testimonialsPerPage === index
                  ? 'w-4 bg-orange-500'
                  : 'bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
