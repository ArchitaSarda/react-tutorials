import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {configureStore} from '@reduxjs/toolkit';
import reducer from "./reducer";
import { Provider } from "react-redux";

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
}

const store = configureStore({reducer, preloadedState: initialState})

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
