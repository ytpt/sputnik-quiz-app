import { createStore, combineReducers } from "redux";
import userScoreReducer from "./reducers/userScoreReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import questionReducer from "./reducers/questionsReducer";
import startQuizReducer from "./reducers/startQuizReducer";

const rootReducer = combineReducers({
    userScore: userScoreReducer,
    questions: questionReducer,
    startQuiz: startQuizReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());