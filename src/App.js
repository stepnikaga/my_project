import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";


import SixCards from './components/SixCards';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Login from './pages/Login';
import Registration from './pages/Registration'
import Stopwatch from './pages/Stopwatch'
import Characters from './pages/Characters';


function App() {

  console.log()

  return (
    
    <div className="App">
      <Navigation />
      <Route path="/" exact>
        <Home />
        <SixCards />
      </Route>

      <Route path="/Counter">
        <Counter />
      </Route>
      
      <Route path="/About">
        <About />
      </Route>

      <Route path="/Characters">
        <Characters />
      </Route>

      <Route path="/Stoper">
        <Stopwatch />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/Registration">
        <Registration />
      </Route>


    </div>  
   
  );
}

export default App;
