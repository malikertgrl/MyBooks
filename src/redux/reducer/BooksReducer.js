import {
    ADD_COUNT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REDUCE_COUNT
} from "../action/types"


INITIAL_STATE = {
    booksList: [],


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
            const index = state.booksList.findIndex(y => y.id == action.payload?.id); //finding index of the item
            console.log("index", index)
            const newArray = [...state.booksList]; //making a new array
            newArray[index].count += 1//changing value in the new array
            return {
                ...state, //copying the orignal state
                booksList: newArray, //reassingning todos to new array
            }
        case REDUCE_COUNT:
            const indexReduce = state.booksList.findIndex(y => y.id == action.payload?.id); //finding indexReduce of the item
            const newArray2 = [...state.booksList]; //making a new array
            newArray2[indexReduce].count -= 1//changing value in the new array
            return {
                ...state, //copying the orignal state
                booksList: newArray2, //reassingning todos to new array
            }

        default:
            return state;
    }
}