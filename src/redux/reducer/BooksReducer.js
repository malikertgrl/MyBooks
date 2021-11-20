
INITIAL_STATE = []

export const BooksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "add_to_cart":
            return [...state, action.payload];
        case "remove_from_cart":
            return [...state];
        default:
            return state;
    }
}