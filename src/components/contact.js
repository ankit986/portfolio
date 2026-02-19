import React from 'react';

class Contacts extends React.PureComponent {
    render() {
        return (
            <div id="contact">
                <div className="section-container">
                    <h1 className='tc f1 line Shadow'>CONTACTS</h1>
                    <div className='w4 br-pill bw3 center bt color'></div>
                    <div className='contact-heading'>
                        <div className='contact-grid shadow-3'>
                            <div className='border-contact' data-aos="zoom-out-right">
                                <i className="fa fa-linkedin-square" /> LinkedIn
                                <p className='list'>
                                    <a href="https://linkedin.com/in/ankitbansal1412" alt="www.linkedin.com/in/ankitbansal1412" className='no-underline color'>
                                        www.linkedin.com/in/ankitbansal1412
                                    </a>
                                </p>
                            </div>
                            <div className='border-contact' data-aos="zoom-out-left">
                                <i className="fa fa-envelope-square" /> Email
                                <p className='list'>ankitbansal1412@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;