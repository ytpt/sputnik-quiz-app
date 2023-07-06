import {
    CHANGE_USER_SCORE,
    IS_GAME_STARTED,
    IS_CHECKBOX_VALID,
} from "./actionsTypes";

export const handleUserScoreChange = (payload) => ({
    type: CHANGE_USER_SCORE,
    payload: payload,
});

export const handleStartQuiz = (payload) => ({
    type: IS_GAME_STARTED,
    payload: payload,
});

export const handleCheckboxChange = (payload) => ({
    type: IS_CHECKBOX_VALID,
    payload: payload,
});
