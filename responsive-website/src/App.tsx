// src/App.tsx
import React from 'react';
import HomePage from './pages/HomePage/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import Colleges from './pages/Colleges/Colleges';
import Contact from './pages/Contact/Contact';
import BottomToTop from './components/ScrollToTopButton/ScrollToTopButton'
import CollegeDetails from './pages/Colleges/CollegeDetails';
const App: React.FC = () => {
  return (
    <div>
      <BottomToTop/>
       <Router>
      
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/colleges/:collegeId" element={<CollegeDetails />} />
        
      </Routes>
    </Router>
    </div>
  );
};

export default App;