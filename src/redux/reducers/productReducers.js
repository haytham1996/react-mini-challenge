import { ActionTypes } from "../constants/actions-types"

const initialState = {
    Products: [],
    Product: [],
    errors: null
}

export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case ActionTypes.GET_ALL_PRODUCT:
            return { ...state, Products: payload, errors: null }
        case ActionTypes.GET_ONE_PRODUCT:
            return { ...state, Product: [...state.Product, payload], errors: null }
        case ActionTypes.PRODUCT_ERROR:
            return { ...state, errors: payload }


        default:
            return state
    }
}