import { IS_CHECKBOX_VALID, IS_CHECKBOX_CLICKED } from "../actionsTypes";

export interface IState {
    is_checkbox_valid: boolean;
    is_checkbox_clicked: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_checkbox_valid: true,
    is_checkbox_clicked: false,
}

const checkboxReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_CHECKBOX_VALID:
            return {
                ...state,
                is_checkbox_valid: action.payload,
            }
        case IS_CHECKBOX_CLICKED:
            return {
                ...state,
                is_checkbox_clicked: action.payload,
            }
        default:
            return state;
    }
}

export default checkboxReducer;