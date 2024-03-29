import React from 'react';
import Navbar from './navbar';

class LandingPage extends React.PureComponent {
  render(){
  return (
    <div className='landingpage-container'>
      <Navbar /> 
      <div id='inside'>
          <div className="profile-detail" data-aos="zoom-out">
            <span className='color name Shadow '>Ankit Bansal</span>
            <p className='profile-description' > Data Scientist at Tiger Analytics </p>
          </div>
      </div>
    </ div>
  );
}
}
export default LandingPage;