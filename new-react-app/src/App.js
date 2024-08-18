import React from "react";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database'
import {GlobalStyle} from "./Components/Style/GlobalStyle";
import {NavBar} from "./Components/NavBar/NavBar";
import {Menu} from "./Components/Menu/Menu";
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";
import {useOpenItem} from "./Components/Hooks/useOpenItem";
import {useOrders} from "./Components/Hooks/useOrders";
import {useAuth} from "./Components/Hooks/useAuth";
import {useTitle} from "./Components/Hooks/useTitle";
import {OrderConfirm} from "./Components/Order/OrderConfirm";
import {useOrderConfirm} from "./Components/Hooks/useOrderConfirm";
import {Context} from "./Components/Functions/context";

const firebaseConfig = {
    apiKey: "AIzaSyBX07TkQg5cypNNsvm4S8haBH_8n4BvF4w",
    authDomain: "mcdonalds-73102.firebaseapp.com",
    databaseURL: "https://mcdonalds-73102-default-rtdb.firebaseio.com",
    projectId: "mcdonalds-73102",
    storageBucket: "mcdonalds-73102.appspot.com",
    messagingSenderId: "386909580464",
    appId: "1:386909580464:web:0d24f0b61f853ece755f75"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
    // Initialize Firebase Authentication and get a reference to the service
    const authentic = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();
    const orderConfirm = useOrderConfirm();
    useTitle(openItem.openItem);

    return (
      <Context.Provider value={{
          authentic,
          openItem, orders,
          orderConfirm,
          firebaseDatabase: firebase.database
      }}>
          <GlobalStyle/>
          <NavBar />
          <Order />
          <Menu/>
          {openItem.openItem && <ModalItem />}
          {orderConfirm.openOrderConfirm && <OrderConfirm />}
      </Context.Provider>
  );
}

export default App;
