import React from 'react';
import Navbar from './navbar';

class LandingPage extends React.PureComponent {
  render(){
  return (
    <div className='landingpage-container'>
      <Navbar /> 
      <div id='inside'>
          <div className="profile-detail" data-aos="zoom-out">
            <span className='color name Shadow '>Happy </span>
            <p className='profile-description' ></p>

            <span className='color name Shadow '>Birthday</span>
            <p className='profile-description' ></p>
            <p className='profile-description' ></p>            

            <span className='color name Shadow '>Ayushi </span>
          </div>
      </div>
    </ div>
  );
}
}
export default LandingPage;