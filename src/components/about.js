import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from '../Assets/Images/profileImage.webp';

class About extends React.PureComponent {
    render() {
        return (
                <div id='about'>
                    <Grid>
                        <Cell col={12}>
                            <h1 className='tc f1 line Shadow'>ABOUT ME</h1>
                                    {/* Underline of heading */}
                            <div className='w4 br-pill bw3 center bt color'></div>
                                    {/* Content */}
                            <div style={{ textAlign:'center', margin: '2vw' }} data-aos="fade-up"  >
                                <Grid className='shadow-3'>
                                    {/* Image */}
                                    <Cell col={6}>
                                        <img
                                            src={ProfileImage} alt="ANKIT BANSAL PROFILE"
                                        />
                                    </Cell>
                                     {/* Description */}
                                    <Cell col={6}>
                                        <p className='about-me' style={{ marginTop: '2em' }}>
                                            Hey Folks!! <br/>I am a Data Scientist at <a  className='color' alt='Tiger Analytics' href='http://www.tigeranalytics.com/'>Tiger Analytics.</a>
                                        </p>
                                        {/* <p className='about-me'>
                                            I am Currently working with Flutter. I have worked with React.js and React-Native.
                                        </p> 
                                         */}
                                        <p className='about-me'>
                                            I have completed my graduation in Computer Science and Engineering from <a className='color' alt='a' href='http://gecbsp.ac.in/'>Government Engineering College, Bilaspur</a>, India. I am native of Korba, Chhattisgarh.
                                        </p>         
                                                                       
                                        {/* <p className='about-me'>
                                            I have been the <a className='color' alt='a' href='https://drive.google.com/file/d/1fwjgVLIOPg-wDv1TE141uJ8SiK0DRe2M/view?usp=sharing'>vice president</a> of the CSE department in session 2018-19 and lead the team to organize various events.
                                            I was selected for the <a className='color' alt='a' href='https://drive.google.com/file/d/1yhMYgdo2owyjTBC8pU9lJ4TGlFc2Sw_m/view?usp=sharing'>Tuition Fee Waiver scholarship</a> and got a 100% scholarship in my college tuition fees.
                                          </p> */}
                                        <p className='about-me'>
                                            I believe that the best way to learn something is by sharing what you learned, so, with my friends I have ignited a developer club in my college to make a local programming community and to help each other by sharing knowledge. We have 150+ members currently enrolled in from different branches who are full of enthusiasm and always ready to take challenges.
                                          </p>
                                        <p className='about-me'>
                                            I like making new connections and learning new things by sharing knowledge.
                                         </p>
                                        <p className='about-me'>
                                            Thank you for your time for going through my website.
                                         </p>
                                  </Cell>
                                </Grid>
                            </div>
                        </Cell>
                    </Grid>
                </div>
        )
    }
}

export default About;