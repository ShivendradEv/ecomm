import { GET_PRODUCTS, SET_LOADER } from "../type";
import axios from "../../util/axios";

export const getProducts = (category, limit) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: SET_LOADER,
                payload: true
            });
            let requestUrl;
            if(category !== '') {
                requestUrl = `/products/category/${category}?limit=${limit}`;
            }
            else {
                requestUrl = `/products?limit=${limit}`;
            }
            const request = await axios.get(`${requestUrl}`);
            dispatch({
                type: GET_PRODUCTS,
                payload: request.data
            });
            dispatch({
                type: SET_LOADER,
                payload: false
            });
        } catch(error) {
            console.error(error);
        }
    }
}