import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from './profileImage.png'

class About extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Grid>
                        <Cell col={12}>
                            <h1 className='tc f1 line Shadow '>ABOUT ME</h1>
                            <div className='w4 br-pill bw3 center bt color'></div>
                            <div style={{ textAlign: 'center', margin: '4rem' }}>
                                <Grid className=' shadow-3'>
                                    <Cell col={6}>
                                        <img
                                            src={ProfileImage} alt="ANKIT BANSAL PROFILE"
                                        />
                                    </Cell>
                                    <Cell col={6}>
                                        <p className='about-me' style={{ marginTop: '2em' }}>
                                            Hi! I am a final year undergraduate student in the Department of Computer Science and Engineering at <a className='color' alt='a' href='http://gecbsp.ac.in/'>Government Engineering College</a>, Bilaspur, India. I belong to Korba, Chhattisgarh.
                                        </p>
                                        <p className='about-me'>
                                            I have completed one-month vocational training in <a className='color' alt='a' href='https://drive.google.com/file/d/0B_-kQAkzcQJCZEpaUG4wTzczZndVeVVQdlpNVnBrYldwb2R3/view?usp=sharing'>Java(J2SE)</a> at CRSIP, Bhopal in 2018, I have also completed an 8-week NPTEL course on <a className='color' alt='a' href='https://drive.google.com/file/d/1pVLPtfokWtPzMnEZlYltrSJ5Ynvzglaw/view?usp=sharing'>Design and Analysis of Algorithm</a>.
                                            I have Learnt web development, nodejs and reactjs on my own.
                                          </p>
                                        <p className='about-me'>
                                            In the very first year of my graduation, I was selected for the <a className='color' alt='a' href='https://drive.google.com/file/d/1yhMYgdo2owyjTBC8pU9lJ4TGlFc2Sw_m/view?usp=sharing'>Tuition Fee waiver scholarship</a> and got a 100% scholarship in my college tuition fees.
                                            I have been the <a className='color' alt='a' href='https://drive.google.com/file/d/1fwjgVLIOPg-wDv1TE141uJ8SiK0DRe2M/view?usp=sharing'>vice president</a> of the CSE department in session 2018-19 and lead the team to organize various events.
                                          </p>
                                        <p className='about-me'>
                                            I have ignited a developer club in my college along with my friends to make a local programming community and to help each other by sharing knowledge. We have more than 100 members currently enrolled in from different branches who are full of enthusiasm and always ready to take the challenge.
                                          </p>
                                        <p className='about-me'>
                                            I am fond of making new connections and learning new things by sharing knowledge.
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
            </div>
        )
    }
}

export default About;