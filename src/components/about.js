import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from '../Assets/Images/profileImage.webp';

let date1 = 'new Date("21/08/2021")'
class About extends React.PureComponent {
   
    state = {
        date: "",
        hour:"",
        minute:"",
        second:""
      };
    
      getDate() {
        // var date = { currentTime: new Date().toLocaleString() };
        const oneDay = 24 * 60 * 60 * 1000; 
        const oneHour = oneDay/24;
        const oneMinute = oneHour/60;
        const firstDate = new Date(2021, 7, 20, 0,29 );
        const secondDate = new Date();
        const timeDiff = (secondDate - firstDate)
        const diffDays = Math.floor(Math.abs(timeDiff / oneDay));
        let hdd = (timeDiff - diffDays * oneDay);
        let hd = Math.floor(hdd/oneHour);
        let mdd = hdd-hd*oneHour;
        let md = Math.floor(mdd/oneMinute);
        let sdd = mdd - md * oneMinute
        let sd = Math.floor(sdd/1000)
        this.setState({
          date: diffDays,
          hour:hd,
          minute:md,
          second:sd
        });
      }
    render() {
        return (
                <div id='about'>
                    <Grid>
                        <Cell col={12}>
                            <h1 className='tc f1 line Shadow'>ABOUT AYUSHI</h1>
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
                                            Ayushi,  <br/>A very happy birthday  to my most faviorate person in the world. Well,{this.getDate()} Its been{this.state.date} days, {this.state.hour} hours, {this.state.minute} minutes, {this.state.second} seconds since we first chat
                                        </p>
                                        {/* <p className='about-me'>
                                            I am Currently working with Flutter. I have worked with React.js and React-Native.
                                        </p> 
                                         */}
                                        <p className='about-me'>
                                            She 
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