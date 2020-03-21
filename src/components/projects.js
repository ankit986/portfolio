import React from 'react';
import { Cell, Grid } from 'react-mdl';
import Brainly_BG from './Assets/Images/Projects_Image/Brainly_BG.jpg';
import lms_BG from './Assets/Images/Projects_Image/lms_BG.jpeg';
import sma_BG from './Assets/Images/Projects_Image/sma_BG.jpeg';
import pd_BG from './Assets/Images/Projects_Image/pd_BG.jpeg';
import CardP from './card'

class Projects extends React.Component {
    render() {
        return (
            <div className='project-container' id="project">
                    <div style={{ minHeight: '100vh' }}>
                        <Grid>
                            <Cell col={12}>
                                <h1 className='tc f1 line Shadow '>PROJECTS</h1>
                                <div className=' color w4 br-pill bw3 center bt '></div>
                            </Cell>
                        </Grid>
                        <div className="projects">
                            <Grid style={{ width: '100%', display:'block'}}>
                                {/* Brainly Project */}
                            <div style={{display:'inline-block'}} data-aos='fade-right'>
                                <CardP  projectName="Brainly"
                                        techStack="ReactJS, ExpressJS, MySQL." 
                                        detail=" A web application which takes image from the registered user and shows the facial part in the image  number of images entered so far by the user."
                                        githubLink="https://github.com/ankit986/Brainly-React-Project" 
                                        bgImage={Brainly_BG}/>
                                {/* Leave Management System */}
                            </div>
                            <div style={{display:'inline-block'}} data-aos='fade-right'>
                                <CardP  projectName="Leave Management System"
                                        techStack="HTML, CSS, JavaScript, PHP, MySQL."
                                        detail="A Online Leave Management System for the local Educational Institute. It automates the process of managing and tracking multiple types of staff leaves."
                                        githubLink="https://github.com/ankit986/Leave-Management-System"
                                        bgImage={lms_BG} />
                            </div>
                                {/* Risk analysis on stock prices */}
                            <div style={{display:'inline-block'}} data-aos='fade-left'>
                                <CardP  projectName="Risk analysis on stock prices"
                                        techStack="Python"
                                        detail="Performed technical analysis and visualisation on stock prices of tech giants  using data provided by yahoo finance and predicted risk on stock prices by using Monte Carlo method."
                                        githubLink="https://github.com/ankit986/Risk-Analysis"
                                        bgImage={sma_BG}/>
                            </div>
                                {/* Plagiarism Checker */}
                            <div style={{display:'inline-block'}} data-aos='fade-left'>
                                <CardP  projectName="Plagiarism Checker"
                                        techStack="Java"
                                        detail="A Java based desktop application to detect the instance of plagiarism on documents. It takes two file, highlights the similar part in both the files and shows the percentage similarity between two files."
                                        githubLink="https://github.com/ankit986/Plagiarism-Checker"
                                        bgImage={pd_BG}/>
                            </div>
                            
                            </Grid>
                        </div>
                    </div>
            </ div>

        )
    }
}

export default Projects;




