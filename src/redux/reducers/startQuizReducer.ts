import { IS_GAME_STARTED } from "../actionsTypes";

export interface IState {
    is_game_started: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_game_started: false
}

const startQuizReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_GAME_STARTED:
            return {
                ...state,
                is_game_started: action.payload,
            }
        default:
            return state;
    }
}

export default startQuizReducer;