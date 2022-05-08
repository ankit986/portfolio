import React from 'react';
import './App.css';
import './index.css';
import About from './components/about';
// import Contacts from './components/contact';
import Projects from './components/projects';
import Footer from './components/footer';
import LandingPage from './components/landingpage';
import AOS from 'aos';
import 'aos/dist/aos.css';


class App extends React.PureComponent {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div className="demo-big-content" >
        <div style={{ height: '100vh' }} >
          <LandingPage />
          <About />
          <Projects />
          {/* <Contacts /> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
