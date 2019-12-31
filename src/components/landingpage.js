import React from 'react';
import Navbar from './navbar';

function LandingPage() {
  return (
    <div className='landingpage-container'>
      <Navbar /> 
      <div id='inside'>
          <div className="profile-detail" data-aos="zoom-out">
            <span className='color name Shadow '>Ankit Bansal</span>
            <p className='profile-description' > Final Year CSE Undergrad at Government Engineering College, Bilaspur. </p>
          </div>
      </div>
    </ div>
  );
}

export default LandingPage;