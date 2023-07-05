import { createStore, combineReducers } from "redux";
import userScoreReducer from "./reducers/userScoreReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import questionReducer from "./reducers/questionsReducer";

const rootReducer = combineReducers({
    userScore: userScoreReducer,
    questions: questionReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());