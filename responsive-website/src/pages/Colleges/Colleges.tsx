import React from 'react';
import Header from '../../components/Header/Header'
import BannerSection from '../../components/Colleges/CollBannerSection'
import Footer from '../../components/HomePage/Footer'

const Colleges: React.FC = () => {
  return (
    <div>
       <Header/>
       <BannerSection/>
       <Footer/>
    </div>
  );
};

export default Colleges;