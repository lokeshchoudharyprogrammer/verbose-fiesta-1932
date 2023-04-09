import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./actiontype"


export const getProduct = (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING }),

        axios.get("http://localhost:6060/data").then((res) => {
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res })
        }).catch((err) => {
            dispatch({ type: GET_PRODUCT_ERROR, payload: err })
        })
}


