import {
    ADD_COUNT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REDUCE_COUNT
} from "./types"


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

export const add_count = item => {
    return (dispatch) => {
        dispatch({
            type: ADD_COUNT,
            payload: item

        })
    }
}

export const reduce_count = () => {
    return (dispatch) => {
        dispatch({
            type: REDUCE_COUNT
        })
    }
}

