import React from 'react';
import { Card, CardTitle, CardText, Button, CardActions, Cell } from 'react-mdl';

class CardP extends React.PureComponent {
    render(){

    return (<div>
        <Cell >
                <Card shadow={50}  style={{width:'310px'}} >
                    {/* Card Title  and Background Image*/}
                    <CardTitle style={{ color: '#fff', height: '176px', display:"block", background: "url("+this.props.bgImage+") center / cover" }}>
                        {this.props.projectName}
                    </CardTitle>

                    {/* Description */}
                    <CardText style={{ textAlign: 'justify', width:'99%'}}>
                        <span style={{ fontWeight: "bold" }}>Tech Stack:-</span><b> {this.props.techStack}</b>
                        <br /><br/>
                        <p>{this.props.detail}</p>
                    </CardText>

                    {/* Git-Link */}
                    <CardActions border>
                        <Button colored href={this.props.githubLink} target="_blank">Github</Button>
                    </CardActions>
                </Card>
        </Cell>
    </div>);
    }
}

export default CardP;




