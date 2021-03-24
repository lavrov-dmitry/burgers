import logo from './logo.svg';
import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
      <div className="App">
      </div>
    </>
  );
}

export default App;
