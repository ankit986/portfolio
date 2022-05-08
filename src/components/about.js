import React from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from '../Assets/Images/Projects_Image/profile_image.png';

class About extends React.PureComponent {


    render() {
        return (
            <div id='about'>
                <Grid>
                    <Cell col={12}>
                        <h1 className='tc f1 line Shadow'>ABOUT AYUSHI</h1>
                        {/* Underline of heading */}
                        <div className='w4 br-pill bw3 center bt color'></div>
                        {/* Content */}
                        <div style={{ textAlign: 'center', margin: '2vw' }} data-aos="fade-up"  >
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

                                        A very happy birthday Philoslene.
                                        <br />
                                        <br />
                                        Let me tell you something about yourself. You are one kind-hearted, simple and strong girl who care about your people a lot, you think about their need and their happiness and believe me your people love you a lot.

                                        <br/> 
                                        One great thing about you is you love yourself a lot, not in a selfish way but in a self-respecting way and I admire that.

                                        <br />
                                        <br />
                                        I have not enough words to compliment your writing, your Instagram posts, those Ryan-Ahana short stories, your poetries, your small articles all of them are simply exceptional and engaging.
                                        <br />
                                        <br />
                                        You love the moon, stars, flowers, coffee mugs, pillows, t-shirts and all those girly stuff and whenever you get any one of these stuff you become a small excited girl and it is great that you keep a child alive within you.

                                        <br/><br/> 
                                        You are one special girl and always be that.
                                        <br/>
                                        Keep smiling Stay you Stay raw
                                        <br />
                                       

                                        {/* Though you never accept this but believe me you are lame, sometimes you do crack good jokes but still, "sometimes".                                          */}
                                        {/* <br />
                                        <br />

                                        I truly believe that one day you will make yourself proud by doing all those things that you have planned for you and your family.
                                        <br />
                                        <br />

                                        It's been this ---- days I know you and in all those days I found a different versions of you, angry, caring, emotional, annoyed, sad, happy.
                                         */}

                                        {/* <p className='about-me'>
                                            I have been the <a className='color' alt='a' href='https://drive.google.com/file/d/1fwjgVLIOPg-wDv1TE141uJ8SiK0DRe2M/view?usp=sharing'>vice president</a> of the CSE department in session 2018-19 and lead the team to organize various events.
                                            I was selected for the <a className='color' alt='a' href='https://drive.google.com/file/d/1yhMYgdo2owyjTBC8pU9lJ4TGlFc2Sw_m/view?usp=sharing'>Tuition Fee Waiver scholarship</a> and got a 100% scholarship in my college tuition fees.
                                          </p> */}
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