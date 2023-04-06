const reducer = (state, action) => {
    switch(action.type) {
        case 'CLEAR_CART':
            return {
                ...state,
                total: 0,
                amount: 0,
                cart: []
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            }
        // case 'INCREASE':
        //     const newCart = state.cart.map(item => {
        //         if(item.id === action.payload) {
        //             return {...item, amount: item.amount + 1}
        //         }
        //         return item;
        //     })
        //     return {
        //         ...state,
        //         cart: newCart
        //     }
        // case 'DECREASE':
        //     const tempCart = state.cart.map(item => {
        //         if(item.id === action.payload) {
        //             return {...item, amount: item.amount - 1}
        //         }
        //         return item;
        //     }).filter(item => item.amount !== 0)
        //     return {
        //         ...state,
        //         cart: tempCart
        //     }
        case 'GET_TOTALS':
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                cartTotal.amount+=amount;
                cartTotal.total+=(price*amount);
                return (cartTotal)
            },{total: 0, amount: 0})

            total = parseFloat(total.toFixed(2))
            return {
                ...state,
                total,
                amount
            }
        case 'IS_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'UPDATE_CART':
            return {
                ...state,
                loading: false,
                cart: action.payload
            }
        case 'TOGGLE_AMOUNT':
            const tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id) {
                    if(action.payload.type === 'INCREASE') {
                        return {...cartItem, amount: cartItem.amount + 1}
                    }
                    if(action.payload.type === 'DECREASE') {
                        return {...cartItem, amount: cartItem.amount - 1}
                    }
                }
                return cartItem;
            }).filter(cartItem => cartItem.amount !== 0)
            return {
                ...state,
                cart: tempCart
            }
        default:
            return state
    }
}

export default reducer