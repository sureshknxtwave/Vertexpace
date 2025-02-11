import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { College, colleges } from './CollegesData';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';
import '../../App.css' 



const CollegeDetail: React.FC = () => {
    const params = useParams();
    const collegeName = params.collegeId;
    const [activeSchool, setActiveSchool] = useState<string>("");
  
    // Find college from URL parameter
    const college = colleges.find((c) => {
      if (!collegeName) return false;
      const collegeUrlName = c.name.toLowerCase().replace(/\s+/g, '-');
      const urlParam = collegeName.toLowerCase();
      return collegeUrlName === urlParam;
    });

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
  
    // Set initial active school when college is found
    useEffect(() => {
      if (college) {
        setActiveSchool(college.schools[0].name);
      }
    }, [college]);
  
    // Handle college not found
    if (!collegeName || !college) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500">College Not Found</h2>
            <p className="text-gray-600 mt-2">
              {collegeName ? `Unable to find college: ${collegeName}` : 'No college specified'}
            </p>
            <Link 
              to="/colleges" 
              className="inline-block bg-[#F47B2A] text-white px-4 py-2 rounded-lg mt-4 hover:bg-[#E06718]"
            >
              Back to Colleges
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <div className="bg-white py-5">
        {/* Breadcrumb */}
       
        {/* College Overview */}
        <div className="max-w-7xl  mx-auto rounded-lg p-6 space-y-6"> {/* Added space-y-6 for vertical spacing */}
  <div className="flex flex-col lg:flex-row gap-48"> {/* Added gap-6 for horizontal spacing */}
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold text-[#0A2357] mb-4">{college.name}</h2>
      <p className="text-[#676767] text-[12px] font-bold leading-relaxed" style={{ textAlign: 'justify' }}>
        {college.description}
      </p>
    </div>
    <div className="lg:w-1/2">
      <img
        src={college.imageUrl}
        alt={`${college.name} Campus`}
        className="w-full h-[300px] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</div>

  
        {/* Programs Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1  className="text-4xl text-[#122648] font-bold">Offered Courses</h1>
  {/* Department Navigation */}
  <div className="flex space-x-6 border-b mb-6 overflow-x-auto my-5 scrollbar-hide">
    {college.schools.map((school, index) => (
      <div
        key={index}
        className={`pb-2 text-[14px]  cursor-pointer whitespace-nowrap ${
          activeSchool === school.name
            ? "text-orange-500 border-b-2 border-orange-500 font-bold"
            : "text-[#122648] font-bold hover:text-orange-500"
        }`}
        onClick={() => setActiveSchool(school.name)}
      >
        {school.name}
      </div>
    ))}
  </div>

  {/* Content Section */}
  <div className="w-full">
    {college.schools.map((school) => {
      if (school.name === activeSchool) {
        return (
          <div key={school.name} className="space-y-8">
            {/* Description */}
            <div className="text-[#676767] text-[12px] font-bold">
              <p>{school.description}</p>
            </div>

            {/* Programs List */}
            <div className="space-y-2">
              {school.programs.undergraduate &&
                school.programs.undergraduate
                  .filter(program => program.name)
                  .map((program, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-[#676767] text-[13px] font-bold">•</span>
                      <span className="text-[#676767] text-[13px] font-bold">{program.name}</span>
                    </div>
                  ))}

              {school.programs.postgraduate &&
                school.programs.postgraduate
                  .filter(program => program.name)
                  .map((program, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-[#676767] text-[13px] font-bold">•</span>
                      <span className="text-[#676767] text-[13px] font-bold">{program.name}</span>
                    </div>
                  ))}

              {school.programs.doctoral &&
                school.programs.doctoral
                  .filter(program => program.name)
                  .map((program, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-[#676767] text-[13px] font-bold">•</span>
                      <span className="text-[#676767] text-[13px] font-bold">{program.name}</span>
                    </div>
                  ))}
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
        </div>

        {/* Right Section - Contact Form */}
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-10 rounded-lg mx-28 shadow-lg md:mx-[120px] flex-col justify-center items-center"
          >
            <ToastContainer position="top-right" autoClose={3000} />
            <h2 className="text-[#0A2357] text-3xl font-bold mb-4">
            Enquiry Form
            </h2>
            <div className="w-12 h-1 bg-[#0A2357] mb-6"></div>
            

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
              <ToastContainer position="top-right" autoClose={3000} />
              
            </form>
            
            
          </motion.div>

          <div className="w-0 flex-grow">
        
      </div>
            
            
        
      </div>
    );
  };
  
export default CollegeDetail;

