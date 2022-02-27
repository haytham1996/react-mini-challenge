import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers/index"
import ThunkMiddleware from "redux-thunk";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, compose(
    applyMiddleware(ThunkMiddleware),
    ReactReduxDevTools)
);

export default store
