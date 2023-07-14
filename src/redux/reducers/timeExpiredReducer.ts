import { IS_TIME_EXPIRED } from "../actionsTypes";

export interface IState {
    is_timer_expired: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_timer_expired: false
}

const timeExpiredReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_TIME_EXPIRED:
            return {
                ...state,
                is_timer_expired: action.payload,
            }
        default:
            return state;
    }
}

export default timeExpiredReducer;