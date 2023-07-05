import { CHANGE_USER_SCORE } from "../actionsTypes";

export interface IState {
    user_score: number;
}

interface IAction {
    type: string;
    payload: number;
}

const initialState: IState = {
    user_score: 0,
}

const userScoreReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case CHANGE_USER_SCORE:
            return {
                ...state,
                user_score: state.user_score + action.payload,
            }
        default:
            return state;
    }
}

export default userScoreReducer;