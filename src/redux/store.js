import { createStore, combineReducers } from "redux";
import userScoreReducer from "./userScoreReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    userScoreReducer
})

export default createStore(rootReducer, composeWithDevTools());