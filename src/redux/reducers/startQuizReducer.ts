import { START_QUIZ } from "../actionsTypes";

export interface IState {
    start_quiz: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    start_quiz: false
}

const startQuizReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case START_QUIZ:
            return {
                ...state,
                start_quiz: action.payload,
            }
        default:
            return state;
    }
}

export default startQuizReducer;