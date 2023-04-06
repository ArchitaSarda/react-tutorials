import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";

const reducer = (state,action) => {
    switch(action.type) {
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case REMOVE:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        // case DECREASE:
        //     let decreaseCart = [];
        //     decreaseCart = state.cart.map(item => {
        //             if(item.id === action.payload.id)
        //                 item = {
        //                     ...item,
        //                     amount: item.amount-1
        //                 }
        //             return item
        //         }).filter(item => item.amount > 0)
        //     return {
        //         ...state,
        //         cart: decreaseCart
        //     }
        // case INCREASE:
        //     let increaseCart = [];
        //     increaseCart = state.cart.map(item => {
        //             if(item.id === action.payload.id)
        //                 item = {
        //                     ...item,
        //                     amount: item.amount+1
        //                 }
        //             return item
        //         })
        //     return {
        //         ...state,
        //         cart: increaseCart
        //     }
        case TOGGLE_AMOUNT:
            let cartItems = state.cart.map(item => {
                if(item.id === action.payload.id) {
                    if(action.payload.toggle === INCREASE) {
                        item = {
                            ...item,
                            amount: item.amount +1
                        }
                    } else if(action.payload.toggle === DECREASE) {
                        item = {
                            ...item,
                            amount: item.amount -1
                        }
                    }
                }
                return item;
            }).filter(item => item.amount > 0)
            return {
                ...state,
                cart: cartItems
            }
        case GET_TOTALS:
            let {total,amount} = state.cart.reduce((totals, item) => {
                const amount = totals.amount+item.amount;
                const total = totals.total + (item.amount*item.price);
                return {total, amount}
            },{total: 0, amount: 0})
            total = parseFloat(total).toFixed(2);
            return {
                ...state,
                total,
                amount
            }
        default:
            return state;
    }
}

export default reducer;