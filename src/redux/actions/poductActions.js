import { productService } from "../../Service/api";
import { ActionTypes } from "../constants/actions-types";

export const getAllProduct = () => async (dispatch) => {
    try {
        const res = await productService.getAllProducts()
        dispatch({
            type: ActionTypes.GET_ALL_PRODUCT,
            payload: res
        })
    } catch (err) {
        const errors = err.message
        dispatch({
            type: ActionTypes.PRODUCT_ERROR,
            payload: errors
        })
    }


}

export const getProductById = (id) => async (dispatch) => {
    try {
        const res = await productService.getById(id)
        console.log(res)
        dispatch({
            type: ActionTypes.GET_ONE_PRODUCT,
            payload: res
        })
    } catch (err) {
        const errors = err.message
        dispatch({
            type: ActionTypes.PRODUCT_ERROR,
            payload: errors
        })
    }
}

