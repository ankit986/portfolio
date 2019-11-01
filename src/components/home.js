import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './about';
import Contacts from './contact';
import Projects from './projects';
import Resume from './resume';
import LandingPage from './landingpage';

const Home = () => (
    <div>     
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />  
      </Switch>  
      
    </div>
    
  )

export default Home;