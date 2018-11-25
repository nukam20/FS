import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NibbsPage from './Components/nibbsPage';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <NavBar />
            <main>        
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path = "/nibbsPage" component={NibbsPage}/>
            </Switch>
            </main>
          <Footer />        
        </div>        
      </BrowserRouter>
      
    )
  }
}

export default App;
