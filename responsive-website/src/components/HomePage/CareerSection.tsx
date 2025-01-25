import React from "react";
import { motion } from "framer-motion";

const CareerSection: React.FC = () => {
  const slideIn = {
    hidden: { opacity: 0, x: 100 }, // Initially hidden and shifted to the right
    visible: { opacity: 1, x: 0 }, // Fully visible and in place
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      className="py-12 font-bold md:py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the component is visible
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
          {/* Left Section */}
          <motion.div
            className="w-full md:w-1/2 relative"
            variants={fadeIn}
            transition={{ duration: 1.2 }}
          >
            <p className="mb-8 p-10 text-gray-600 text-[16px] md:text-[16px] leading-relaxed">
              We have exciting offers for our student community, ranging from
              free counselling sessions to carefully designed assistance
              programs. Aspiring to build impeccable careers for our youth.
            </p>
            <img
              src={require("../../utils/career1.jpg")}
              alt="Students"
              className="w-full h-auto md:h-[640px] rounded-xl shadow-lg"
            />

            {/* Progress Bars Section */}
            <motion.div
              className="absolute -bottom-20 left-12  bg-white p-6 rounded-xl shadow-lg w-11/12 md:w-10/12"
              
            >
              <div className="space-y-6">
                {[
                  { title: "Personalized Counselling", percentage: "80%" },
                  { title: "Guided Assistance Programs", percentage: "75%" },
                  { title: "Career Success", percentage: "100%" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-base md:text-lg text-gray-600 mb-2">
                      <span className="font-semibold">{item.title}</span>
                      <span className="font-bold">{item.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-blue-900 h-3 rounded-full"
                        style={{ width: item.percentage }}
                        initial={{ width: 0 }}
                        animate={{ width: item.percentage }}
                        transition={{ duration: 1.5 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="w-full md:w-1/2 mt-16 md:mt-0"
            variants={fadeIn}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="mb-12">
              <span className="text-orange-500 font-bold text-[20px] md:text-[16px] uppercase tracking-wide">
                About Vertexpace
              </span>
              <h2 className="text-3xl md:text-[40px] font-bold text-blue-900 mt-4 leading-tight">
                Vertexpace: Your Pathway To Career Success
              </h2>
              <div className="mt-4 w-24 h-1 bg-blue-900 "></div>
            </div>

            <div className="space-y-12">
              {/* Card 1 */}
              <motion.div
                className="flex items-center px-11 mx-3 gap-4 rounded-lg shadow-2xl p-4"
                variants={slideIn}
                transition={{ delay: 0.4, duration: 1 }}
              >
                <div className="text-blue-900 text-2xl md:text-4xl">★</div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-2">
                    Career Compass
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Feeling lost? Vertexpace guides you to the right career with
                    expert counseling.
                  </p>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                className="relative"
                variants={fadeIn}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <img
                  src={require("../../utils/career2.jpg")}
                  alt="Career Guidance"
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="flex items-center gap-4 shadow-2xl p-4 rounded-lg"
                variants={slideIn}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <div className="text-blue-900 text-2xl md:text-3xl">★</div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-2">
                    Career Guidance
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    With expertise in the Indian education system, we guide you
                    to the right career path for success.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerSection;
