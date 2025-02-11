import React from 'react'
import Header from '../../components/Header/Header';
import CollegeDetail from '../../components/Colleges/CollegeDetail';
import Footer from '../../components/HomePage/Footer';

type Props = {}

function CollegeDetails({}: Props) {
  return (
    <div>
        <Header/>
        <CollegeDetail/>
        <Footer/>
    </div>
  )
}

export default CollegeDetails