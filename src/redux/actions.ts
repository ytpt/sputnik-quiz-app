import {
    IS_GAME_STARTED,
    IS_CHECKBOX_VALID,
    ADD_USER_SCORE,
    RESET_USER_SCORE,
} from "./actionsTypes";

export const addUserScore = (payload: number) => ({
    type: ADD_USER_SCORE,
    payload: payload,
});

export const resetUserScore = (payload: number) => ({
    type: RESET_USER_SCORE,
    payload: payload,
});

export const handleStartQuiz = (payload: boolean) => ({
    type: IS_GAME_STARTED,
    payload: payload,
});

export const handleCheckboxChange = (payload: boolean) => ({
    type: IS_CHECKBOX_VALID,
    payload: payload,
});