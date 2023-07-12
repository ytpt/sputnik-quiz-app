import {
    IS_GAME_STARTED,
    IS_CHECKBOX_VALID,
    ADD_USER_SCORE,
    RESET_USER_SCORE,
    IS_USER_REG,
    IS_USER_AUTH,
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

export const handleUserReg = (payload: boolean) => ({
    type: IS_USER_REG,
    payload: payload,
});

export const handleUserAuth = (payload: boolean) => ({
    type: IS_USER_AUTH,
    payload: payload,
});