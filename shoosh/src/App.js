import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'
import {howler, howl, Howl} from "howler";



function App() {
  const [person] = useState([
   
  ])
  const [CurrentPerson, setCurrentPerson] = useState(person[0])
  return (
    <div>
      <main>
        <h1 className='header'>
          Shoosh
        </h1>
        <Nav></Nav>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
