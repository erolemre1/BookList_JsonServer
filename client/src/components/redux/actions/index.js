import * as actionTypes from "../actionTypes"

export const initialState = (booklist) => {
    return { type: actionTypes.FETCH_STATE, payload: booklist }
}
export const basketAdded = (book) => {
    return { type: actionTypes.BASKET_ADDED, payload: book }
}
export const basketDeleted = (id) => {
    return { type: actionTypes.BASKET_DELETED, payload: id }
}
export const bookIncrease = (id) => {
    return { type: actionTypes.BOOK_INCREASE, payload: id }
}
export const bookDecrease = (id) => {
    return { type: actionTypes.BOOK_DECREASE, payload: id }
}


