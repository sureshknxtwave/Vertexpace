import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Header.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from '../Modal/Modal';

const ROUTES_CONFIG = {
  '/': {
    title: 'Home',
    showTitle: false,
  },
  '/what-we-do': {
    title: 'What We Do',
    showTitle: true,
  },
  '/colleges': {
    title: 'Colleges',
    showTitle: true,
  },
  '/contact': {
    title: 'Contact Us',
    showTitle: true,
  },
  '/join-us': {
    title: 'Join Us',
    showTitle: true,
  },
} as const;


// Add a helper function to get the current route and title
const getRouteConfig = (pathname: string) => {
  // Check if it's a college detail page
  if (pathname.startsWith('/colleges/')) {
    // Extract the college name from the URL and format it
    const collegePath = pathname.split('/colleges/')[1];
    const collegeName = decodeURIComponent(collegePath)
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      title: collegeName,
      showTitle: true,
    };
  }

  // Return the config for other routes
  return ROUTES_CONFIG[pathname as keyof typeof ROUTES_CONFIG] || {
    title: '404',
    showTitle: true,
  };
};

// In your component where you render the title section:

  



const Header: React.FC = () => {

  const location = useLocation();
  const currentRoute = getRouteConfig(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const [scrollPosition, setScrollPosition] = useState(30);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50); // Show when scrolling up or near top
      setScrollPosition(currentScrollY > 50 ? 0 : 30); // Adjust top position
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const handleJoinUsClick = () => {
    setIsModalOpen(true); // Open modal when button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const handleSubmit = (formData: { name: string; email: string; phone: string; subject: string; message: string }) => {
    console.log('Form submitted with data:', formData);
    // You can replace this with logic for sending data to an API
    handleCloseModal(); // Close the modal after submission
  };

  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="relative ">
      {/* Top Bar */}
      {/* <div className="bg-[#0A2357] py-3 font-bold hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center text-white text-sm">
            <a href="tel:+919620201058" className="flex items-center hover:text-gray-200">
              <span>+91 9620201058</span>
            </a>
            <span className="divider">|</span>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-200">
              <span>Jayanagar, Bangalore</span>
            </a>
            <span className="divider">|</span>
            <a href="mailto:info@vertexspace.com" className="flex items-center hover:text-gray-200">
              <span>info@scholarpath.com</span>
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/vertexpace"  className="text-white hover:text-gray-200">
              <i className="fab fa-facebook-f"></i>
            </a>
            
            <a href="https://www.instagram.com/vertexpace/" className="text-white hover:text-gray-200">
              <i className="fab fa-instagram"></i>
            </a>
           
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="bg-[#0A2357] font-bold p-2 pt-8 ">
        <header className={`bg-white shadow-sm mx-0 md:mx-20 rounded-xl fixed  left-0  w-[99vw] md:w-[88%] z-50 ${
        isVisible ? "top-0" : "-top-20"
      }  `}  style={{ top: `${scrollPosition}px` }}>

        
          
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between h-24 relative">
              {/* Logo */}
              <div className="flex items-center w-1/4">
                <Link to="/">
                  <img
                    src={require('../../utils/logo2.png')}
                    alt="Vertexspace Logo"
                    className="h-90px md:h-[130px]"
                  />
                </Link>
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center p-2"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center justify-center w-2/4">
                <div  className="flex space-x-8">
                  {Object.entries(ROUTES_CONFIG).map(([path, { title }]) => (
                    path !== '/join-us' && (
                      <Link
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        key={path}
                        to={path}
                        className={`nav-links text-gray-700 hover:text-orange-500 transition-colors duration-200 relative ${
                          location.pathname === path ? 'font-bold text-orange-500' : ''
                        }`}
                      >
                        {title.toUpperCase()}
                        <span className="absolute bottom-0 left-0 w-3/5 h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
                      </Link>
                    )
                  ))}
                </div>
              </div>

              {/* Button Section */}
              <div className="hidden md:flex items-center justify-end w-1/4">
                <button
                  onClick={handleJoinUsClick}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  JOIN US NOW
                </button>
                <Modal
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  handleSubmit={handleSubmit}
                />
                 <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
              </div>
            </nav>

            {/* Mobile Menu */}
            <div
              className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
              style={{ zIndex: 1000 }}
            >
              <div className="px-4 py-3 space-y-3">
                {Object.entries(ROUTES_CONFIG).map(([path, { title }]) => (
                  path !== '/join-us' && (
                    <Link
                    
                      key={path}
                      to={path}
                      className={`block text-center py-2 transition-colors duration-200 ${
                        location.pathname === path
                          ? 'text-orange-500 font-bold'
                          : 'text-gray-700 hover:text-orange-500'
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                    
                      {title.toUpperCase()}
                    </Link>
                  )
                ))}
                <button
                  onClick={handleJoinUsClick}
                  className="bg-orange-500 w-[100%] text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                >
                  JOIN US NOW
                </button>
                <Modal
                  isOpen={isModalOpen}
                  handleClose={handleCloseModal}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Page Title Section */}
      {currentRoute.showTitle && (
      <div className="bg-[#0A2357] text-white pt-36 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h1 className="text-4xl font-bold">{currentRoute.title}</h1>
            <div className="flex items-center">
              <Link to="/" className="text-white hover:text-gray-200 transition-colors duration-200">
                Home
              </Link>
              <span className="mx-2">»</span>
              {location.pathname.startsWith('/colleges/') && (
                <>
                  <Link 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    to="/colleges" 
                    className="text-white hover:text-gray-200 transition-colors duration-200"
                  >
                    Colleges
                  </Link>
                  <span className="mx-2">»</span>
                </>
              )}
              <span>{currentRoute.title} </span>{location.pathname.startsWith('/colleges/') && (<span className="mx-2">College</span>)}
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Header;
