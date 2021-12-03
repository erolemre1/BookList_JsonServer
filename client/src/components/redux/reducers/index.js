import * as actionTypes from "../actionTypes"
const INITIAL_STATE = {
    booklist: [],
    cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STATE:
            return {
                ...state, booklist: action.payload
            }

        case actionTypes.BASKET_ADDED:
            return {
                ...state, cart: state.cart.find(cartItem => cartItem.id === action.payload.id) ?
                    state.cart.map(books => books.id === action.payload.id ? { ...books, count: books.count + 1 } : books) : [...state.cart, { ...action.payload }]
            }

      
        case actionTypes.BASKET_DELETED:

            return {
                ...state, cart: state.cart.filter((book) => book.id !== action.payload)
              
            }

        case actionTypes.BOOK_INCREASE:
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === action.payload ? {
                    ...cartItem, count: cartItem.count + 1
                } : cartItem)
            }




        case actionTypes.BOOK_DECREASE:


            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === action.payload ? {
                    ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1
                } : cartItem)
            }

        default:
            return state;
    }

}