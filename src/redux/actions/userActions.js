import { userService } from "../../Service/api";
import { ActionTypes } from "../constants/actions-types";

export const getAllUsers = () => async (dispatch) => {
    try {
        const res = await userService.getAllUsers()
        dispatch({
            type: ActionTypes.GET_ALL_USER,
            payload: res
        })
    } catch (err) {
        const errors = err.message
        dispatch({
            type: ActionTypes.USER_ERROR,
            payload: errors
        })
    }


}

export const getById = (id) => async (dispatch) => {
    try {
        const res = await userService.getById(id)

        dispatch({
            type: ActionTypes.GET_USER,
            payload: res
        })
    } catch (err) {
        const errors = err.message
        dispatch({
            type: ActionTypes.USER_ERROR,
            payload: errors
        })
    }
}

