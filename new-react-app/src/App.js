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
    apiKey: "AIzaSyCI9Ohdoh290tNTxHChxtSGn2RiRK4sCiw",
    authDomain: "mrdonalds-c85c1.firebaseapp.com",
    databaseURL: "https://mrdonalds-c85c1-default-rtdb.firebaseio.com",
    projectId: "mrdonalds-c85c1",
    storageBucket: "mrdonalds-c85c1.appspot.com",
    messagingSenderId: "547047690365",
    appId: "1:547047690365:web:7a7374ea849fd828506114"
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
