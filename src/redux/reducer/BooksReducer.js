import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/types"


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
            console.log("remove book")
            return state.booksList.filter(x => x.id !== action.payload.id)

        default:
            return state;
    }
}