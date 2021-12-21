import {
    ADD_COUNT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REDUCE_COUNT
} from "../action/types"


INITIAL_STATE = {
    booksList: [],
    number: {},
    count: 0

}



export const BooksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                booksList: [...state.booksList, action.payload]
            }


        case REMOVE_FROM_CART:
            console.log("remove_from_cart")
            return {
                ...state,
                booksList: state.booksList.filter(item => item !== action.payload)
            }

        case ADD_COUNT:
            return { ...state, count: state.count + 1 }

        case REDUCE_COUNT:
            return { ...state, count: state.count - 1 }

        default:
            return state;
    }
}