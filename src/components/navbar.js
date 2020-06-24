import React from 'react'
// import { Link } from 'react-scroll'
import CV from '../Assets/Resume/AnkitBansal_CV.pdf';

class Navbar extends React.PureComponent{
render(){
    return(
    <header className="sans-serif">
        <div className="dt w-100 mw8 center">

            <div className="dtc v-mid tr pa3">

                <a href="#about" className="f4 grow fw4 hover-orange no-underline white-70 dn dib-ns pv2 ph3" >
                    About
                      </a>
                <a href="#project" className="f4 grow fw4 hover-orange no-underline white-70 dn dib-ns pv2 ph3" >
                    Projects
                      </a>
                <a href={CV} target='_blank' rel="noopener noreferrer" className="f4 fw4 grow hover-orange no-underline white-70 dn dib-ns pv2 ph3" >
                    Resume
                        </a>
                <a href="#contact" className="f4 grow fw4 hover-orange no-underline white-70 dn dib-ns pv2 ph3" >
                    Contacts
                      </a>


            </div>
        </div>
    </header>)
}};


export default Navbar;

