export const add_to_cart = item => {
    return (dispatch) => {
        dispatch({
            type: "add_to_cart",
            payload: item
        })
    }
}

export const remove_from_cart = item => {
    return (dispatch) => {
        dispatch({
            type: "remove_from_cart",
            payload: item
        })
    }
}