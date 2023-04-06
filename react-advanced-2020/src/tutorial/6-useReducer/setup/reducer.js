const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        list: [...state.list, action.payload],
        showModal: true,
        modalMsg: 'Item added'
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        showModal: false,
        modalMsg: ''
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        showModal: true,
        modalMsg: 'Item removed',
        list: state.list.filter(item => item.id !== action.payload)
      }
    case 'NO_ITEM':
      return {
        ...state,
        showModal: true,
        modalMsg: 'No item added'
      }
    default:
      return state
  }
}

export default reducer;