// src/components/CollegesGrid.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion

// Define the interface for college data
interface ICollege {
  id: number;
  name: string;
  location: string;
  imageUrl: string;
  link: string;
  websiteUrl?: string;
}

// College data array
const colleges: ICollege[] = [
  {
    id: 1,
    name: "Ramaiyah Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/1.png"),
    link: "/colleges/msrit",
    websiteUrl: "www.msrit.edu"
  },
  {
    id: 2,
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/2.jpeg"),
    link: "/colleges/dsce",
    websiteUrl: "www.dsce.edu"
  },
  {
    id: 3,
    name: "East Point College of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/3.jpeg"),
    link: "/colleges/east-point",
    websiteUrl: "www.eastpoint.ac.in"
  },
  {
    id: 4,
    name: "BV College Of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/4.jpeg"),
    link: "/colleges/bv",
    websiteUrl: "www.bvce.edu"
  },
  {
    id: 5,
    name: "CMR Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/5.jpeg"),
    link: "/colleges/cmr",
    websiteUrl: "www.cmrit.ac.in"
  },
  {
    id: 6,
    name: "Jyothishmathi College Of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/6.jpeg"),
    link: "/colleges/jce",
    websiteUrl: "www.jce.ac.in"
  },
  {
    id: 7,
    name: "Christ University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/7.jpg"),
    link: "/colleges/christ",
    websiteUrl: "www.christ.edu"
  },
  {
    id: 8,
    name: "St Joseph College Of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/8.jpeg"),
    link: "/colleges/stjoseph",
    websiteUrl: "www.stjoseph.edu"
  },
  {
    id: 9,
    name: "CMR JSS",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/9.jpeg"),
    link: "/colleges/cmrjss",
    websiteUrl: "www.cmrjss.edu"
  },
  {
    id: 10,
    name: "JAIN University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/10.webp"),
    link: "/colleges/jain",
    websiteUrl: "www.jainuniversity.ac.in"
  },
  {
    id: 11,
    name: "Mount Carmel College Autonomous",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/11.jpeg"),
    link: "/colleges/mount-carmel",
    websiteUrl: "www.mcc.edu"
  },
  {
    id: 12,
    name: "Bangalore Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/12.jpeg"),
    link: "/colleges/bit-2",
    websiteUrl: "www.bit.edu"
  },
  {
    id: 13,
    name: "Reva University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/13.jpeg"),
    link: "/colleges/reva",
    websiteUrl: "www.reva.edu.in"
  },
  {
    id: 14,
    name: "Presidency University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/14.jpeg"),
    link: "/colleges/presidency",
    websiteUrl: "www.presidencyuniversity.in"
  },
  {
    id: 15,
    name: "Nitte Meenakshi Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/15.jpeg"),
    link: "/colleges/nitte",
    websiteUrl: "www.nmit.ac.in"
  },
];

const CollegesGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-[120px]">
      {/* Adjust grid spacing and add more width */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 25 }}
      >
        {colleges.map((college) => (
          <motion.div
            key={college.id}
            className="group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 50, damping: 25 }}
          >
            <Link to={college.link} className="group">
              {/* Set max-width to the card and allow flexibility in size */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:transform hover:scale-105 max-w-md mx-auto">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  {college.imageUrl ? (
                    <img
                      src={college.imageUrl}
                      alt={college.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-gray-400 text-lg">No Image Available</span>
                    </div>
                  )}
                  
                </div>
                <div className="flex-grow p-4 flex flex-col">
                <p className="text-sm font-bold text-gray-700 mb-2">
                    {college.location}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {college.name}
                  </h3>
                  
                  {college.websiteUrl && (
                    <div className="mt-auto flex items-center">
                      <span className="text-[#F47B2A] mr-1">→</span>
                      <a
                        href={`https://${college.websiteUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F47B2A] hover:text-[#E06718] text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {college.websiteUrl}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollegesGrid;
