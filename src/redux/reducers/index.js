import { combineReducers } from "redux";
import Products from "./productReducers";
import Users from "./userReducers";
import Cartes from "./carteReducers"

const reducers = combineReducers({
    Products,
    Users,
    Cartes
})

export default reducers