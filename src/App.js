import logo from './logo.svg';
import React from 'react'
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenitem } from './components/hooks/useOpenitem'
import { useOrders } from './components/hooks/useOrders';

function App() {

  const openItem = useOpenitem();

  const orders = useOrders();


  return (
    <>
      <GlobalStyle/>
      <NavBar/>
      <Menu {...openItem}/>
      <Order {...orders}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
