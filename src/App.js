import logo from './logo.svg';
import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/Order';

function App() {

  const [openItem, setOpenItem] = React.useState(null);

  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={ setOpenItem }/>
      <Order/>
      <ModalItem openItem={ openItem } setOpenItem={ setOpenItem }/>
    </>
  );
}

export default App;
