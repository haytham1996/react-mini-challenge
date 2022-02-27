import { ActionTypes } from "../constants/actions-types"

const initialState = {
    Cartes: [],

    errors: null
}

export default function (state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case ActionTypes.GET_CART_BY_USER:
            return { ...state, Cartes: payload, errors: null }

        case ActionTypes.CARTE_ERROR:
            return { ...state, errors: payload }
        default:
            return state
    }
}