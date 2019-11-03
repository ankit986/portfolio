import React from 'react';
import {Card, CardTitle, CardText, Button, CardActions, Cell, Grid } from 'react-mdl';
import Tilt from 'react-tilt';

class Projects extends React.Component{
    render(){
     return(
         <div style={{minWidth:"100%", position:'relative'}}>
            <Grid>
                <Cell col={12}>
                 <h1 className='tc f1 line Shadow '>PROJECTS</h1>
                 <div className=' color w4 br-pill bw3 center bt '></div>
                </Cell>
            </Grid>
            <div className="projects">  
                <Grid style={{width:'100%'}}>
                    <Cell col={6} >
                        <Tilt className="Tilt" options={{ max : 15 }}>
                            <Card shadow={50} className='card' >
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.jqueryscript.net/images/Polygonal-Particles-Background-polygonizr.jpg) center / cover'}}>
                                    Brainly 
                                </CardTitle>
                                <CardText  style={{textAlign:'justify'}}>
                                    <span style={{fontWeight:"bold"}}>Tech Stack:-</span>ReactJS, ExpressJS, MySQL.
                                    <br />
                                    A web application which takes image from the registered user and shows the facial part in the image  number of images entered so far by the user.
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/ankit986/Brainly-React-Project" target="_blank">Github</Button>
                                </CardActions>
                            </Card>
                        </Tilt>
                    </Cell>
                    <Cell col={6}>
                        <Tilt className="Tilt" options={{ max : 15 }}>
                            <Card shadow={50} className='card' >
                                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.usnews.com/dims4/USNEWS/01521c9/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F46%2F19%2F5c6c54fb4c6f812dc85c20fc656a%2F141106-portfolio-stock.jpg) center / cover'}}>
                                        Portfolio Website 
                                </CardTitle>
                                <CardText style={{textAlign:'justify'}}>
                                    <span style={{fontWeight:"bold"}}>Tech Stack:-</span> ReactJS
                                    <br />
                                    <p>Personal Portfolio website developed solely using ReactJS. 
                                    <br /> Used Various libraries like React-MDL, Tachyons and Tilt.</p>
                                </CardText>
                                <CardActions border>
                                    <Button colored href="https://github.com/ankit986/Brainly-React-Project" target="_blank">Github</Button>
                                </CardActions>
                            </Card>
                        </Tilt>
                    </Cell>
                </Grid>   
            </div>
         </div>       
     )
    }
}

export default Projects;