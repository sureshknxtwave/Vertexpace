// src/App.tsx
import React from 'react';
import Header from '../../components/Header/Header'
import BannerSection from '../../components/WhatWeDo/What-BannerSection'
import Footer from '../../components/HomePage/Footer'

const WhatWeDo: React.FC = () => {
  return (
    <div>
       <Header/>
       <BannerSection/>
       <Footer/>
    </div>
  );
};

export default WhatWeDo;