import React from 'react';
import {Card, CardTitle, CardText, Button, CardActions, Cell, Grid } from 'react-mdl';
import Tilt from 'react-tilt';

class Projects extends React.Component{
    render(){
     return(
         <div >
             <Grid>
             <Cell col={12}>
              <h1 className='tc f1 line Shadow '>PROJECTS</h1>
                 <div className=' color w4 br-pill bw3 center bt '></div></Cell>
            
             </Grid>
            <div className="projects">     
            <Tilt className="Tilt" options={{ max : 15 }} >
                {/* <div>  */}
                    <Card shadow={50} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.jqueryscript.net/images/Polygonal-Particles-Background-polygonizr.jpg) center / cover'}}>
                            Brainly 
                        </CardTitle>
                        <CardText>
                            <span style={{fontWeight:"bold"}}>Tech Stack:-</span> ReactJS, ExpressJS, MySQL.
                            <br />
                            A web application which takes image from the registered user and shows the facial part in the image  number of images entered so far by the user.                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/ankit986/Brainly-React-Project" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                {/* </div> */}
            </Tilt>
            <Tilt className="Tilt" options={{ max : 15 }} style={{marginLeft:'15rem' }} >
                {/* <div>  */}
                    <Card shadow={50} style={{width: '512px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.jqueryscript.net/images/Polygonal-Particles-Background-polygonizr.jpg) center / cover'}}>
                                Portfolio Website 
                        </CardTitle>
                        <CardText>
                            <span style={{fontWeight:"bold"}}>Tech Stack:-</span> ReactJS
                            <br />
                            Personal Portfolio website developed solely using ReactJS. 
                            <br /> Used Various libraries like React-MDL, Tachyons and Tilt.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/ankit986/Brainly-React-Project" target="_blank">Github</Button>
                        </CardActions>
                    </Card>
                {/* </div> */}
            </Tilt>
            </div>
         </div>       
     )
    }
}

export default Projects;