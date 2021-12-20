import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"


export const add_to_cart = item => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: item
        })
    }
}

export const remove_from_cart = item => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: item
        })
    }
}

