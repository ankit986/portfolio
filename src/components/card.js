import React from 'react';
import { Card, CardTitle, CardText, Button, CardActions, Cell } from 'react-mdl';
import Tilt from 'react-tilt';

function CardP(props) {
    return (<div style={{width:'25%'}}>
        <Cell >
            <Tilt options={{ transition: false, scale:1, speed:1000 }}>
                <Card shadow={50} >

                    {/* Card Title  and Background Image*/}
                    <CardTitle style={{ color: '#fff', height: '176px', display:"block", background: "url("+props.bgImage+") center / cover" }}>
                        {props.projectName}
                    </CardTitle>

                    {/* Description */}
                    <CardText style={{ textAlign: 'justify' }}>
                        <span style={{ fontWeight: "bold" }}>Tech Stack:-</span> {props.techStack}
                        <br />
                        <p>{props.detail}</p>
                    </CardText>

                    {/* Git-Link */}
                    <CardActions border>
                        <Button colored href={props.githubLink} target="_blank">Github</Button>
                    </CardActions>
                </Card>
            </Tilt>
        </Cell>
    </div>);
}

export default CardP;




