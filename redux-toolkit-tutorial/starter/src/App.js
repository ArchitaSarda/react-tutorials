import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modals";
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(state => state.modal);
  const { cartItems, isLoading } = useSelector((state) => state.cart);

    useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems, dispatch])
  
  useEffect(() => {
    dispatch(getCartItems())
  },[dispatch])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  return <>
    {isOpen && <Modal /> }
    <Navbar />
    <CartContainer />
  </>;
}
export default App;
