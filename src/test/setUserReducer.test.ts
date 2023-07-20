import setUserReducer, { IAction, IState } from "../redux/reducers/setUserReducer";
import { handleSetUser } from "../redux/actions";
import { IUser } from "../models/response/IUser";

describe("setUserReducer", () => {

    const newUser: IUser = {
        email: "test@mail.ru",
        isActivated: true,
        id: "12345",
    }

    const unknownAction: IAction = {
        type: "UNKNOWN_ACTION_TYPE",
        payload: null,
    };

    const state: IState = {
        user: null
    }

    beforeEach(() => {
        state.user = newUser;
    })

    describe("when setting a new user", () => {
        it("should update state with new user", () => {
            let action = handleSetUser(newUser);
            let newState = setUserReducer(state, action);
            expect(newState.user).toEqual(newUser);
        })
    });

    describe("when action type is unknown", () => {
        it("should return the initial state", () => {
            const newState = setUserReducer(state, unknownAction);
            expect(newState).toEqual(state);
        });
    });
});