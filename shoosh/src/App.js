import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <main>
        <Nav></Nav>
        <Main></Main>
      </main>
    </div>
  );
}

export default App;
