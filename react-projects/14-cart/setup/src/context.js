import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  cart: cartItems,
  loading: false,
  total: 0,
  amount: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData();
  },[])

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  },[state.cart])

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const removeItem = id => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  const increaseAmount = id => {
    dispatch({type: 'INCREASE', payload: id})
  }

    const decreaseAmount = id => {
    dispatch({type: 'DECREASE', payload: id})
  }

  const fetchData = async () => {
    dispatch({type: 'IS_LOADING'});
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type: 'UPDATE_CART', payload: data})
  }

  const toggleAmount = (id, type) => {
    dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
