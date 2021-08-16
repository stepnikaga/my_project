import './App.css';
import 'rc-slider/assets/index.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

import SixCards from './components/SixCards';
import Navigation from './components/Navigation';
import FotoContainer from './components/FotoContainer';



function App() {
  
  console.log()

  return (
    <Router>
      <div className="App">
     
        <Navigation />
        <FotoContainer />
        <SixCards />
        

      </div>  
    </Router>
  );
}

export default App;
