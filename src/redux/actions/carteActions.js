import { carteService } from "../../Service/api"
import { ActionTypes } from "../constants/actions-types"

export const getCarteByUser = (id) => async (dispatch) => {
    try {
        const res = await carteService.getCarteByUser(id)
        console.log(res)
        dispatch({
            type: ActionTypes.GET_CART_BY_USER,
            payload: res
        })
    } catch (err) {
        const errors = err.message
        dispatch({
            type: ActionTypes.CARTE_ERROR,
            payload: errors
        })
    }
}
