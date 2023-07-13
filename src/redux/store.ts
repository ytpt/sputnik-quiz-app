import { createStore, combineReducers } from "redux";
import userScoreReducer from "./reducers/userScoreReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import questionReducer from "./reducers/questionsReducer";
import startQuizReducer from "./reducers/startQuizReducer";
import checkboxReducer from "./reducers/checkboxReducer";
import userStatusReducer from "./reducers/userStatusReducer";
import setUserReducer from "./reducers/setUserReducer";
import showFormReducer from "./reducers/showFormReducer";

const rootReducer = combineReducers({
    userScore: userScoreReducer,
    questions: questionReducer,
    isGameStarted: startQuizReducer,
    isCheckboxValid: checkboxReducer,
    userStatus: userStatusReducer,
    setUser: setUserReducer,
    showForm: showFormReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());