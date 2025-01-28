// src/components/FeaturedCourses.tsx
import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  { name: 'Commerce', image: require('../../utils/commerce.jpg') },
  { name: 'Engineering', image: require('../../utils/engi.jpg') },
  { name: 'B.Arch', image: require('../../utils/barch.jpg') },
  { name: 'Ayurvedic', image: require('../../utils/ayurvedic.jpg') },
  { name: 'Management', image: require('../../utils/management.jpg') },
  { name: 'Law', image: require('../../utils/law.jpg') },
];

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: 'easeInOut',
    },
  }),
};

const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-[150px] bg-gray-100 font-bold">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible" // Scroll-triggered animation
          viewport={{ once: true }} // Trigger only once
          className="text-center mb-12"
        >
          <motion.h2
            className="text-orange-500 font-bold uppercase tracking-wide"
            variants={slideInVariants}
            custom={0}
          >
            ScholarPath Courses
          </motion.h2>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-blue-900 mt-2"
            variants={slideInVariants}
            custom={1}
          >
            Most Featured Courses
          </motion.h3>
          <motion.div
            className="mt-4 w-24 h-1 bg-blue-900 mx-auto"
            variants={slideInVariants}
            custom={2}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible" // Scroll-triggered animation
          viewport={{ once: true }} // Trigger only once
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              variants={slideInVariants}
              custom={index}
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-58 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-900/0 hover:bg-blue-900/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h4 className="text-lg md:text-xl font-bold text-blue-900">
                  {course.name}
                </h4>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
