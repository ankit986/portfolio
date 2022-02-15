import React from 'react';
import { Cell, Grid } from 'react-mdl';
import Brainly_BG from '../Assets/Images/Projects_Image/Brainly_BG.jpg';
import sma_BG from '../Assets/Images/Projects_Image/sma_BG.jpeg';
import av_BG from '../Assets/Images/Projects_Image/av_BG.png';
import fc_BG from '../Assets/Images/Projects_Image/fc_BG.jpeg';
import wyr_BG from '../Assets/Images/Projects_Image/wyr_BG.jpeg';
import npp_BG from '../Assets/Images/Projects_Image/npp_BG.jpg';
import hip_BG from '../Assets/Images/Projects_Image/hip_BG.jpeg';

import CardP from './card'

const projectDetails = {
    NewsPopularityPrediction: {
        projectName: "News Popularity Prediction",
        techStack: "Python (Supervised Regression)",
        detail: "Built a model that predicts the popularity of news items after 2 days of publication on various social media platform like facebook, linkedin and Google-Plus",
        githubLink: "https://github.com/ankit986/News-Popularity-Prediction",
        bgImage: npp_BG,
    },
    HealthCrossSellChurnPrediction: {
        projectName: "Health Insurance Cross Sell Churn Prediction",
        techStack: "Python (Supervised Classification)",
        detail: "Built a model that predicts whether a customer who took a health insurance previously from a company, would be interested in taking vehicle insurance from the same company.",
        githubLink: "https://github.com/ankit986/HEALTH-INSURANCE-CROSS-SELL-PREDICTION",
        bgImage: hip_BG,
    },
    RiskAnalysisOnStockPrices: {
        projectName: "Risk analysis on stock prices",
        techStack: "Python",
        detail: "Performed technical analysis and visualisation on stock prices of tech giants  using data provided by yahoo finance and predicted risk on stock prices by using Monte Carlo method.",
        githubLink: "https://github.com/ankit986/Risk-Analysis",
        bgImage: sma_BG,
    },
    FlashCardApp: {
        projectName: "FlashCardApp",
        techStack: "React-Native, Redux",
        detail: "A native application which allows user to add decks and each deck can contain multiple cards. User can add a question and an answer to the card. User can also take quiz on the cards.",
        githubLink: "https://github.com/ankit986/FlashCardApp",
        bgImage: fc_BG,
    },
    Brainly: {
        projectName: "Brainly",
        techStack: "ReactJS, ExpressJS, MySQL.",
        detail: " A web application which takes image from the registered user and shows the facial part in the image  number of images entered so far by the user.",
        githubLink: "https://github.com/ankit986/Brainly-React-Project",
        bgImage: Brainly_BG,
    },
   
    AlgorithmVisualiser: {
        projectName: "Algorithm Visualiser",
        techStack: "React",
        detail: "A React App that visualises different algorithms and shows the actual work that is being done by the algorithm.",
        githubLink: "https://github.com/ankit986/algorithm-visualiser",
        bgImage: av_BG,
    },

    WouldYouRather: {
        projectName: "Would You Rather?",
        techStack: "React, Redux",
        detail: "A React app in which a user will be asked a question in the form: \"Would you rather [option A] or [option B] ?\". The user must first authenticate to Create a new question.",
        githubLink: "https://github.com/ankit986/FlashCardApp",
        bgImage: wyr_BG,
    }

}
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
                        <Grid style={{ width: '100%', display: 'block' }}>
                            {Object.entries(projectDetails).map(projectDetail => {
                                const key = projectDetail[0]
                                const project = projectDetail[1]
                                return <div key={key} style={{ display: 'inline-block' }} data-aos='zoom-in'>
                                    <CardP projectName={project.projectName}
                                        techStack={project.techStack}
                                        detail={project.detail}
                                        githubLink={project.githubLink}
                                        bgImage={project.bgImage} />
                                </div>
                            })}


                        </Grid>
                    </div>
                </div>
            </ div>

        )
    }
}

export default Projects;




