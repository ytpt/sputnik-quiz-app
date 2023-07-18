import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userScoreReducer from "./reducers/userScoreReducer";
import questionReducer from "./reducers/questionsReducer";
import startQuizReducer from "./reducers/startQuizReducer";
import checkboxReducer from "./reducers/checkboxReducer";
import userStatusReducer from "./reducers/userStatusReducer";
import setUserReducer from "./reducers/setUserReducer";
import showFormReducer from "./reducers/showFormReducer";
import timerReducer from "./reducers/timerReducer";
import showScoreReducer from "./reducers/showScoreReducer";
import timeExpiredReducer from "./reducers/timeExpiredReducer";
import errorMessageReducer from "./reducers/errorMessageReducer";
import loaderReducer from "./reducers/loaderReducer";

const rootReducer = combineReducers({
    userScore: userScoreReducer,
    questions: questionReducer,
    isGameStarted: startQuizReducer,
    isCheckboxValid: checkboxReducer,
    isCheckboxClicked: checkboxReducer,
    userStatus: userStatusReducer,
    setUser: setUserReducer,
    showForm: showFormReducer,
    isTimerActive: timerReducer,
    isScoreShown: showScoreReducer,
    isTimeExpired: timeExpiredReducer,
    errorMessage: errorMessageReducer,
    isLoaderActive: loaderReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, composeWithDevTools());