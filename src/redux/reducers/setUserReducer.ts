import { SET_USER } from "../actionsTypes";
import { IUser } from "../../models/response/IUser";

export interface IState {
    user: IUser | null;
}

interface IAction {
    type: string;
    payload: IUser | null;
}

const initialState: IState = {
    user: null
}

const setUserReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

export default setUserReducer;