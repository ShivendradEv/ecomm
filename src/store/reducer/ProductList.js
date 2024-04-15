import { GET_PRODUCTS, SET_LOADER } from "../type";

const initialState = {
    products: [],
    loader: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_LOADER: {
            return {
                ...state,
                loader: action.payload
            }
        }
        default: 
            return state;
    }
}

export default reducer;