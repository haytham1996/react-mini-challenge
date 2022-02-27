import { ActionTypes } from "../constants/actions-types"

const initialState = {
    Users: [],
    User: {},
    errors: null
}

export default function (state = initialState, action) {
    const { payload, type } = action;
    console.log(action)
    switch (type) {
        case ActionTypes.GET_ALL_USER:
            return { ...state, Users: payload, errors: null }
        case ActionTypes.USER_ERROR:
            return { ...state, errors: payload }

        case ActionTypes.GET_USER:
            return { ...state, User: payload, errors: null }

        default:
            return state
    }
}
