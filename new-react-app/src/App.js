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

const firebaseConfig = {
    apiKey: "AIzaSyApefLj1Mda6A7rBV0coS-H8nfmkuBeAbg",
    authDomain: "mydonalds-ef6f5.firebaseapp.com",
    databaseURL: "https://mydonalds-ef6f5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mydonalds-ef6f5",
    storageBucket: "mydonalds-ef6f5.appspot.com",
    messagingSenderId: "481170689661",
    appId: "1:481170689661:web:a9ae7987e65b76e43a6b14"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
    // Initialize Firebase Authentication and get a reference to the service
    const authentic = useAuth(firebase.auth);
    const openItem = useOpenItem();
    const orders = useOrders();

    return (
      <>
          <GlobalStyle/>
          <NavBar {...authentic}/>
          <Order
              {...orders}
              {...openItem}
              {...authentic}
              firebaseDatabase={firebase.database}
          />
          <Menu {...openItem}/>
          {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
      </>
  );
}

export default App;
