import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Home from './components/home';
import {Link} from 'react-router-dom';
import './index.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      style:null,
    }
  }

  toggle(position){
     if(this.state.style === position){
       this.setState({style:''});
     }
     else{
      this.setState({style:position});
     }
  }

  myStyle(position){
    if(this.state.style === position){
      return "#ff6406";
    }
    else{
      return "";
    }
  }

  render(){   
  return (    
        <div className="demo-big-content">
      <Layout className="header-gradient">
        <Header className="header-gradient color" title={<Link style={{textDecoration:'none', color:'#ff6406'}} to='/'>Ankit Bansal</Link>} scroll>
            <Navigation> 
                <Link to="/about"  style={{color: this.myStyle(0),fontSize:'20px'}} onClick={()=>this.toggle(0)}>About</Link>
                <Link to="/projects" style={{color: this.myStyle(1),fontSize:'20px' }} onClick={()=>this.toggle(1)}>Projects</Link>
                <Link to="/resume" style={{color: this.myStyle(2),fontSize:'20px'}} onClick={()=>this.toggle(2)}>Resume</Link>
                <Link to="/contacts" style={{color: this.myStyle(3),fontSize:'20px'}} onClick={()=>this.toggle(3)}>Contacts</Link>
            </Navigation>
        </Header>
        <Drawer >
            <Navigation>
               <Link to="/about" style={{color: this.myStyle(0),fontSize:'20px'}} onClick={()=>this.toggle(0)}>About</Link>
                <Link to="/projects" style={{color: this.myStyle(1),fontSize:'20px' }} onClick={()=>this.toggle(1)}>Projects</Link>
                <Link to="/resume" style={{color: this.myStyle(2),fontSize:'20px'}} onClick={()=>this.toggle(2)}>Resume</Link>
                <Link to="/contacts"  style={{color: this.myStyle(3),fontSize:'20px'}} onClick={()=>this.toggle(3)}>Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>  
            <Home />
        </Content>    
    </Layout>   
    </div>

  );
  }
}

export default App;
