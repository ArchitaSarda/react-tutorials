import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import cartItems from '../../cartItems';
import axios from 'axios';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.cartItems = state.cartItems.map(item => {
        if(item.id === action.payload) {
          item.amount+=1;
        }
        return item;
      })
    },
    decrease: (state, action) => {
      state.cartItems = state.cartItems.map(item => {
        if(item.id === action.payload) {
          item.amount-=1;
        }
        return item;
      }).filter(item => item.amount > 0)
    },
    toggleAmount: (state, action) => {
      state.cartItems = state.cartItems.map(item => {
        if(item.id === action.payload.id) {
          if(action.payload.actionType === 'increase') {
            item.amount+=1
          } else if(action.payload.actionType === 'decrease') {
            item.amount-=1
          }
        }
        return item
      }).filter(item => item.amount > 0)
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = parseFloat(total).toFixed(2);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    })
    builder.addCase(getCartItems.rejected, (state, action) => {
      console.log(action);
      state.isLoading = false;
    })
    
  }
});

const url = 'https://course-api.com/react-useReducer-cartproject';

// export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
//   return await fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

export const getCartItems = createAsyncThunk('cart/getCartItems', async(param, thunkApi) => {
  // console.log(param, thunkApi, thunkApi.getState())
  try {
    const resp = await axios(url);
    return resp.data;
  } catch(error) {
    // console.log(error);
    return thunkApi.rejectWithValue('something went wrong')
  }
})

export const { clearCart, removeItem, increase, decrease, toggleAmount, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;

