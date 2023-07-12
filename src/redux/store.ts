import { createStore, combineReducers } from "redux";
import userScoreReducer from "./reducers/userScoreReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import questionReducer from "./reducers/questionsReducer";
import startQuizReducer from "./reducers/startQuizReducer";
import checkboxReducer from "./reducers/checkboxReducer";
import userStatusReducer from "./reducers/userStatusReducer";

const rootReducer = combineReducers({
    userScore: userScoreReducer,
    questions: questionReducer,
    isGameStarted: startQuizReducer,
    isCheckboxValid: checkboxReducer,
    userStatus: userStatusReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());