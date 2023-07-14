import { IS_TIMER_ACTIVE } from "../actionsTypes";

export interface IState {
    is_timer_active: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_timer_active: false
}

const timerReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_TIMER_ACTIVE:
            return {
                ...state,
                is_timer_active: action.payload,
            }
        default:
            return state;
    }
}

export default timerReducer;