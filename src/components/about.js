import React from 'react';
import ProfileImage from '../Assets/Images/profileImage.png';

class About extends React.PureComponent {
    render() {
        return (
            <div id='about'>
                <div className="section-container">
                    <h1 className='tc f1 line Shadow'>ABOUT ME</h1>
                    {/* Underline of heading */}
                    <div className='w4 br-pill bw3 center bt color'></div>
                    {/* Content */}
                    <div style={{ textAlign: 'center', margin: '2vw' }} data-aos="fade-up">
                        <div className='shadow-3 about-grid'>
                            {/* Image */}
                            <div className="about-image-cell">
                                <img
                                    src={ProfileImage} alt="ANKIT BANSAL PROFILE"
                                    style={{ maxWidth: '100%', borderRadius: '8px' }}
                                />
                            </div>
                            {/* Description */}
                            <div className="about-text-cell">
                                <p className='about-me' style={{ marginTop: '2em' }}>
                                    Hey Folks!! <br />I am a Senior Data Scientist at <a className='color' alt='Tiger Analytics' href='http://www.tesco.com/'>Tesco PLC.</a>
                                </p>
                                <p className='about-me'>
                                    I have completed my graduation in Computer Science and Engineering from <a className='color' alt='a' href='http://gecbsp.ac.in/'>Government Engineering College, Bilaspur</a>, India. I am native of Korba, Chhattisgarh.
                                </p>
                                <p className='about-me'>
                                    I believe that the best way to learn something is by sharing what you learned, so, with my friends I have ignited a developer club in my college to make a local programming community and to help each other by sharing knowledge. We have 150+ members currently enrolled in from different branches who are full of enthusiasm and always ready to take challenges.
                                </p>
                                <p className='about-me'>
                                    I like making new connections and learning new things by sharing knowledge.
                                </p>
                                <p className='about-me'>
                                    Thank you for your time for going through my website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;