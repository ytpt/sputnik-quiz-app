import { IS_SCORE_SHOWN } from "../actionsTypes";

export interface IState {
    is_score_shown: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_score_shown: false
}

const showScoreReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_SCORE_SHOWN:
            return {
                ...state,
                is_score_shown: action.payload,
            }
        default:
            return state;
    }
}

export default showScoreReducer;