import { SHOW_FORM } from "../actionsTypes";

export interface IState {
    showForm: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    showForm: false
}

const showFormReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case SHOW_FORM:
            return {
                ...state,
                showForm: action.payload,
            }
        default:
            return state;
    }
}

export default showFormReducer;