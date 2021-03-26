import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth';
import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenitem } from './components/hooks/useOpenitem'
import { useOrders } from './components/hooks/useOrders';
import { useAuth } from './components/hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyDVeWR84dFKxMihLxOtpLG5IxsZrMvLRO0",
  authDomain: "burgers-d90c3.firebaseapp.com",
  projectId: "burgers-d90c3",
  storageBucket: "burgers-d90c3.appspot.com",
  messagingSenderId: "745630316562",
  appId: "1:745630316562:web:d4a2723108d5a809ff80cb"
};

firebase.initializeApp(firebaseConfig);

function App() {
  
  const auth = useAuth(firebase.auth);

  const openItem = useOpenitem();

  const orders = useOrders();


  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Menu {...openItem}/>
      <Order {...orders} {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;
