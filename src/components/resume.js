import React from 'react';
import CV from './AnkitBansal_CV.pdf';
import {Grid, Cell} from 'react-mdl';
class Resume extends React.Component{
    render(){
        return(
            <div>  
                <Grid>
                    <Cell col={12}>
                        <h1 className='tc f1 line Shadow '>RESUME</h1>
                        <div className=' color w4 br-pill bw3 center bt '></div>
                    </Cell>
                </Grid>
                <div className='resume-button_p'>
                    <a className="resume-button f6 link dim ba ph3 pv2 mb2 dib color Shadow" style={{color:'#ff6406', fontSize:'18px',  border:'1px solid black'}} href={CV} download>Download Resume</a>
                    <a className="resume-button f6 link dim ba ph3 pv2 mb2 dib color Shadow" style={{color:'#ff6406', fontSize:'18px',  border:'1px solid black'}} rel="noopener noreferrer" href={CV} target="_blank">View Resume</a>
                </div>
            </div>
        )
    
 }
}

export default Resume;