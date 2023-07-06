import { IS_CHECKBOX_VALID } from "../actionsTypes";

export interface IState {
    is_checkbox_valid: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_checkbox_valid: true
}

const checkboxReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_CHECKBOX_VALID:
            return {
                ...state,
                is_checkbox_valid: action.payload,
            }
        default:
            return state;
    }
}

export default checkboxReducer;