import React from 'react'
import { Link } from 'react-scroll'
import CV from './Assets/Resume/AnkitBansal_CV.pdf';

const Navbar = () => (

    <header className="sans-serif">
                <div className="dt w-100 mw8 center">
                    <div className="dtc v-mid tr pa3">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="f4 grow fw4 hover-orange no-underline white-70 dn dib-ns pv2 ph3" 
                            style={{cursor:'pointer'}}>About
                        </Link>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={800}
                            className="f4 fw4 grow hover-orange no-underline white-70 dn dib-ns pv2 ph3"
                            style={{cursor:'pointer'}}>Projects
                        </Link>
                        <a href={CV} target='_blank' rel="noopener noreferrer"  className="f4 fw4 grow hover-orange no-underline white-70 dn dib-ns pv2 ph3" >
                          Resume
                        </a>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1000}
                            className="f4 fw4 grow  hover-orange no-underline white-70 dn dib-ns pv2 ph3" 
                            style={{cursor:'pointer'}}>Contact
                        </Link>
                    </div>
                </div>
    </header>
);


export default Navbar;