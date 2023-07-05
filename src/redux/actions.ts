import { CHANGE_USER_SCORE } from "./actionsTypes";

export const handleUserScoreChange = (payload) => ({
    type: CHANGE_USER_SCORE,
    payload: payload,
});
