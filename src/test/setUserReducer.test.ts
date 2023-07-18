import setUserReducer, { IState } from "../redux/reducers/setUserReducer";
import { handleSetUser } from "../redux/actions";
import { IUser } from "../models/response/IUser";

describe("userReducer", () => {
    const newUser: IUser = {
         email: "test@mail.ru",
         isActivated: true,
         id: "12345",
    }
    const state: IState = {
        user: null
    }

    beforeEach(() => {
        state.user = newUser;
    })

    it("new user should be set", () => {
        let action = handleSetUser(newUser);
        let newState = setUserReducer(state, action );
        expect(newState.user).toEqual(newUser);
    })
})