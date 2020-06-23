import React from 'react';
import { Card, CardTitle, CardText, Button, CardActions, Cell } from 'react-mdl';

function CardP(props) {
    return (<div>
        <Cell >
                <Card shadow={50}  style={{width:'310px'}} >
                    {/* Card Title  and Background Image*/}
                    <CardTitle style={{ color: '#fff', height: '176px', display:"block", background: "url("+props.bgImage+") center / cover" }}>
                        {props.projectName}
                    </CardTitle>

                    {/* Description */}
                    <CardText style={{ textAlign: 'justify', width:'99%'}}>
                        <span style={{ fontWeight: "bold" }}>Tech Stack:-</span><b> {props.techStack}</b>
                        <br /><br/>
                        <p>{props.detail}</p>
                    </CardText>

                    {/* Git-Link */}
                    <CardActions border>
                        <Button colored href={props.githubLink} target="_blank">Github</Button>
                    </CardActions>
                </Card>
        </Cell>
    </div>);
}

export default CardP;




