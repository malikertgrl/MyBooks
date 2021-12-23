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
            // return { ...state, count: state.count + 1 }

            var index = state.booksList.findIndex(y => y.id !== action.payload); //finding index of the item

            const newArray = [...state.booksList]; //making a new array
            newArray[index].count += 1//changing value in the new array
            console.log("ekle", index)
            return {
                ...state, //copying the orignal state
                booksList: newArray, //reassingning todos to new array
            }


        // case ADD_COUNT:
        //     return { ...state, count: state.count + 1 }

        // case REDUCE_COUNT:
        //     return { ...state, count: state.count - 1 }

        default:
            return state;
    }
}