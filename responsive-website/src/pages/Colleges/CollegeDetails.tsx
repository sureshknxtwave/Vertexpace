import React from 'react'
import Header from '../../components/Header/Header';
import CollegeDetail from '../../components/Colleges/CollegeDetail';

type Props = {}

function CollegeDetails({}: Props) {
  return (
    <div>
        <Header/>
        <CollegeDetail/>
    </div>
  )
}

export default CollegeDetails