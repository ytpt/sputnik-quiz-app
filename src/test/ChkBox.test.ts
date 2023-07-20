import ChkBox from "../components/ChkBox/ChkBox";
import { addUserScore } from "../redux/actions";
import userScoreReducer, { IState } from "../redux/reducers/userScoreReducer";

jest.mock("../redux/actions");

describe("ChkBox", () => {

    let state: IState;
    const rightAnswer: number = 4;

    beforeEach(() => {
        state = {
            user_score: 5
        };
    });

    describe("when setting the right answer", () => {
        it("should dispatch action and update selectedAnswer", () => {
            const selectedAnswer: number = 4;

            (addUserScore as jest.Mock).mockImplementationOnce(() => ({
                type: "ADD_USER_SCORE",
                payload: 1
            }));

            if (rightAnswer === selectedAnswer) {
                let action = addUserScore(1);
                let newState = userScoreReducer(state, action);
                expect(newState.user_score).toEqual(state.user_score + 1)
            }
        });

        afterEach(() => {
            (addUserScore as jest.Mock).mockClear();
        });
    });

    describe("when setting the wrong answer", () => {
        it("should not dispatch action and return the initial state", () => {
            const selectedAnswer: number = 1;

            if (rightAnswer !== selectedAnswer) {
                const action = addUserScore(1);
                expect(action).toBeUndefined();
                expect(state).toEqual(state)
            }
        });
    });
});