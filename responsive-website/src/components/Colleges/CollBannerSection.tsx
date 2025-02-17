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
    name: "MS Ramaiyah Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/1.png"),
    link: "/colleges/msrit",
    websiteUrl: "www.msrit.edu"
  },
  {
    id: 2,
    name: "BMS College of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/bms.png"),
    link: "/colleges/bms",
    websiteUrl: "www.bmsce.in"
  },
  {
    id: 3,
    name: "Dayananda Sagar College of Engineering",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/2.jpeg"),
    link: "/colleges/dsce",
    websiteUrl: "www.dsce.edu"
  },
  {
    id: 4,
    name: "East Point College of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/3.jpeg"),
    link: "/colleges/east-point",
    websiteUrl: "www.eastpoint.ac.in"
  },
  
  {
    id: 6,
    name: "CMR Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/5.jpeg"),
    link: "/colleges/cmr",
    websiteUrl: "www.cmrit.ac.in"
  },
  
  {
    id: 8,
    name: "Christ University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/7.jpg"),
    link: "/colleges/christ",
    websiteUrl: "www.christ.edu"
  },
  {
    id: 9,
    name: "St Joseph's College of Commerce",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/8.jpeg"),
    link: "/colleges/stjoseph",
    websiteUrl: "www.stjoseph.edu"
  },
  {
    id: 10,
    name: "CMR JSS",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/9.jpeg"),
    link: "/colleges/cmrjss",
    websiteUrl: "www.cmrjss.edu"
  },
  {
    id: 11,
    name: "JAIN University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/10.webp"),
    link: "/colleges/jain",
    websiteUrl: "www.jainuniversity.ac.in"
  },
  {
    id: 12,
    name: "Mount Carmel College Autonomous",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/11.jpeg"),
    link: "/colleges/mount-carmel",
    websiteUrl: "www.mcc.edu"
  },
  {
    id: 13,
    name: "Bangalore Institute Of Technology",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/12.jpeg"),
    link: "/colleges/bit-2",
    websiteUrl: "www.bit.edu"
  },
  {
    id: 14,
    name: "Reva University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/13.jpeg"),
    link: "/colleges/reva",
    websiteUrl: "www.reva.edu.in"
  },
  {
    id: 15,
    name: "Presidency University",
    location: "Bangalore",
    imageUrl: require("../../utils/Colleges/14.jpeg"),
    link: "/colleges/presidency",
    websiteUrl: "www.presidencyuniversity.in"
  },
  {
    id: 16,
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
            <Link to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} className="group">
              <div className="bg-white pb-4 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:transform hover:scale-105 max-w-md mx-auto">
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
                  <h3 className="text-md font-semibold text-gray-900 mb-4">
                    {college.name}
                  </h3>

                  {/* Read More Button */}
                  <div className="text-center">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} // Removed encodeURIComponent
                className="bg-[#F47B2A] w-[100px] hover:bg-[#E06718] text-white text-xs font-medium py-2 px-2 rounded-lg text-center mt-auto"
              >
                Read More
              </Link>
            </div>
                              
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