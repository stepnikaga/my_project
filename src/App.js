import './App.css';
import React, { useState } from 'react';
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
import CharacterCard from './components/CharacterCard';


function App () {
  const [chars, setChars] = useState(null)
  console.log('chars', chars)

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
        <Characters setChars={setChars} />  
      </Route>
      {chars?.map(({ name, species, image, status, gender, id}) => (
        <Route path={`/${id}`}>
          karta postaci
          <CharacterCard 
            key={id}
            name={name}
            species={species}
            image={image}
            status={status}
            gender={gender}
            id={id}
          />
        </Route>
      ))}

      <Route path="/Stopwatch">
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
