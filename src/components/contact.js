import React from 'react';
import {Grid, Cell} from 'react-mdl';

class Contacts extends React.Component{
    render(){
     return(
        <div>           
            <Grid>
                <Cell col={12} className=''>
                 <h1 className='tc f1 line Shadow '>CONTACTS</h1>
                 <div className='w4 br-pill bw3 center bt  color '></div>
                 <div style={{textAlign:'center', margin: '4rem',  fontSize: '30px'}}>
                 <Grid className='center shadow-3'>
                    <Cell col={4} className='contact-border'>
                        <i className="fa fa-phone" aria-hidden="true" />  Phone
                        <p className='list'>
                          +91-9174110863<br/>  +91-9399030249
                        </p>                      
                    </Cell>
                    <Cell col={4} className='contact-border'>
                        <i className="fa fa-linkedin-square" />  LinkedIn
                        <p className='list'><a  href="https://linkedin.com/in/ankitbansal1412" alt="www.linkedin.com/in/ankitbansal1412" className='no-underline color' > www.linkedin.com/in/ankitbansal1412</a>
                        </p>              
                    </Cell>
                    <Cell col={4} className='contact-border'>
                        <i className="fa fa-envelope-square" /> Email
                        <p className='list'>ankitbansal1412@gmail.com</p>                      
                    </Cell>
                    
                   
                 </Grid> 
                 </div>
                </Cell>
            </Grid>
        </div>
    )
    }
}

export default Contacts;