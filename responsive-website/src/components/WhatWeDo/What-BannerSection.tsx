import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for the service data
interface IService {
  title: string;
  description: string;
  image: string;
}

// Define the array of services
const services: IService[] = [
  {
    title: "Psychometric Test",
    description:
      "A Psychometric test is a mental exercise that uses scientific formulas and is generally carried out to analyse student's psychological elements such as personality, intelligence, and behavior. This scientific assessment allows students to perceive their area of interest, this helps them to choose their career path. Usually, students fail to recognise subjects which they are capable of pursuing and to which they can build a career, this Psychometric test will let them have a clear picture of their capacity. A Psychometric test will let you and our counsellors understand your capacity. Vertexpace counsellors will interview students and later they have to attend Psychometric test, according to test results and interview taken our counsellors will enroot their career path.",
    image: require("../../utils/WhatWeDoImages/1.png"),
  },
  {
    title: "Career Counselling",
    description:
      "Vertexpace enlightens students and their families to pick the right school/college/university, and other programs keeping student's areas of interest in consideration. Assisting students with their admission process in school/college/university, uncovering all information about colege and courses they offer, and also providing other beneficial information regarding college and courses. Standard Education for students is our main concern, Vertexpace is prominent in admission guidance service, students are guaranteed admission in any Bangalore colleges.",
    image: require("../../utils/WhatWeDoImages/2.png"),
  },
  {
    title: "Admission Guidance",
    description:
      "Counseling is the role of practitioners, who combine giving advice on their topic of expertise with counseling techniques that support clients in making complex decisions and facing difficult situations. Career counseling is focused on how the individuals manage their journey through life, learning and work (Career). This includes career exploration, making career choices, managing career changes, lifelong Career Development and dealing with other career related issues. There is no agreed definition of career counseling worldwide, mainly due to conceptual, cultural and linguistic differences. In today’s competitive world, it is important for one to choose and decide on a definite career path early in one’s life. It is important for the student to discover their potential, andinterest, and then select the right course accordingly. In case you are in a dilemma about choosing a suitable career for yourself, approaching our experienced and qualified career counsellor is advisable.",
    image: require("../../utils/WhatWeDoImages/3.png"),
  },
  {
    title: "Application & Documentation",
    description:
      "Vertexpace simplifies the admission process for students and their families by providing expert guidance for schools, colleges, and universities. Each institution has unique application requirements and documentation procedures, which can often feel overwhelming. Our experienced counselors offer personalized support, helping you gather the right documents, fill out applications accurately, and meet deadlines smoothly. With in-depth knowledge of admission processes, we ensure that every step is clear and stress-free. From understanding your goals to organizing paperwork and submitting applications, Vertexpace is with you at every stage.",
    image: require("../../utils/WhatWeDoImages/4.png"),
  },
  {
    title: "Secured Admission",
    description:
      "At Vertexpace, we pledge to help you secure admission to your chosen colleges with complete guidance and support. Our team simplifies the entire admission process, ensuring you have all the essential tools and information to move forward confidently. From understanding requirements to organizing documents and meeting deadlines, we provide step-by-step assistance tailored to your needs. With our expertise, we make what often feels like a complex process smooth and manageable. Whether it’s choosing the right institution or submitting accurate applications, Vertexpace is here to guide you at every step. We are committed to making your admission journey easier, stress-free, and successful. Trust Vertexpace to help you take the next step toward your academic goals with confidence.",
    image: require("../../utils/WhatWeDoImages/5.png"),
  },
];

const BannerSection: React.FC = () => {
  return (
    <div className="container mt-5 mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 px-4 py-6 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Start from left or right
            whileInView={{ opacity: 1, x: 0 }} // Animate to normal position when in view
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
            transition={{ duration: 0.8 }} // Control the duration of the slide effect
          >
            <div className="w-full p-20 md:w-1/2 min-w-[50%]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 min-w-[50%] flex flex-col items-start justify-center md:px-[70px]">
              <h3 className="text-2xl font-extrabold text-[#0A2357] mb-4 text-center md:text-left">
                {service.title}
              </h3>
              <p className="text-[14px] font-bold text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default BannerSection;
