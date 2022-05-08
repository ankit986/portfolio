import React from 'react';
import { Cell, Grid } from 'react-mdl';
import ojos from '../Assets/Images/Projects_Image/ojos.jpeg';
import writter from '../Assets/Images/Projects_Image/writter.jpeg';
import lame from '../Assets/Images/Projects_Image/lame.jpeg';
import cute from '../Assets/Images/Projects_Image/cute.jpeg';
import pretty from '../Assets/Images/Projects_Image/pretty.jpeg';
// import supportive from '../Assets/Images/Projects_Image/supportive.jpeg';
import unpredictable from '../Assets/Images/Projects_Image/unpredictable.jpeg';
import posessive from '../Assets/Images/Projects_Image/posessive.jpeg';
import caring from '../Assets/Images/Projects_Image/caring.jpeg';
import dreamer from '../Assets/Images/Projects_Image/dreamer.jpeg';

import CardP from './card'

const projectDetails = {
    Cute_Ayushi: {
        projectName: "Cute Ayushi",
        techStack: "She can be cute",
        detail: "Once Ayushi is comfortable with you, you will see a new person, a cute kid with all truth and caring",
        githubLink: "https://github.com/ankit986/News-Popularity-Prediction",
        bgImage: cute,
    },
   
    RiskAnalysisOnStockPrices: {
        projectName: "Ojos Bonitos Ayushi",
        techStack: "Brown eyes",
        detail: "Just look at her brown eyes and remember the lyrics of those \"naina\" songs",
        githubLink: "https://github.com/ankit986/Risk-Analysis",
        bgImage: ojos,
    },
    FlashCardApp: {
        projectName: "Caring Ayushi",
        techStack: "Cares like anything",
        detail: "If you are her people, then you will get to know the meaning of \"caring\". She thinks about you and your well being, your needs and whatnot.",
        githubLink: "https://github.com/ankit986/FlashCardApp",
        bgImage: caring,
    },
    Brainly: {
        projectName: "Posessive Ayushi",
        techStack: "Only her person",
        detail: "Her person knows that he/she is \"her\" person only be it Shreya, Shruti, Tripti or Aman, they know the possessive ayushi",
        githubLink: "https://github.com/ankit986/Brainly-React-Project",
        bgImage: posessive,
    },
   
    AlgorithmVisualiser: {
        projectName: "Writter Ayushi",
        techStack: "Natural Writter",
        detail: "Read any one of her articles, post, stories or poetries and found yourself reading many more.",
        githubLink: "https://github.com/ankit986/algorithm-visualiser",
        bgImage: writter,
    },

    
    NewsPopularityPrediction1: {
        projectName: "Unpredictable Ayushi",
        techStack: "No you cant predict",
        detail: "She can show you different versions of her in a small period and you can't predict what will be the next version.",
        githubLink: "https://github.com/ankit986/News-Popularity-Prediction",
        bgImage: unpredictable,
    },
    HealthCrossSellChurnPrediction1: {
        projectName: "Lame Ayushi",
        techStack: "Just thinks she is  hilarious",
        detail: "Wanna listen the lamest joke? You can talk to her and ask her to tell you a joke",
        githubLink: "https://github.com/ankit986/HEALTH-INSURANCE-CROSS-SELL-PREDICTION",
        bgImage: lame,
    },
    RiskAnalysisOnStockPrices1: {
        projectName: "Pretty Ayushi",
        techStack: " -- ",
        detail: "Do I need to write anything for this?",
        githubLink: "https://github.com/ankit986/Risk-Analysis",
        bgImage: pretty,
    },
    FlashCardApp1: {
        projectName: "Dreamer Ayushi",
        techStack: "She dreams she writes",
        detail: "She is and was a dreamy girl and she recently got to know that she is very imaginary also. Just sit with her and listen to the fairy tale she imagines.",
        githubLink: "https://github.com/ankit986/FlashCardApp",
        bgImage: dreamer,
    },
   
}
class Projects extends React.Component {

    render() {
        return (
            <div className='project-container' id="project">
                <div style={{ minHeight: '100vh' }}>
                    <Grid>
                        <Cell col={12}>
                            <h1 className='tc f1 line Shadow '>Traits Of Ayushi</h1>
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




