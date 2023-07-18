import { IS_GAME_STARTED, IS_CHECKBOX_VALID, IS_CHECKBOX_CLICKED, ADD_USER_SCORE,
    RESET_USER_SCORE, IS_USER_REG, IS_USER_AUTH, SET_USER, SHOW_FORM,
    IS_TIMER_ACTIVE, IS_SCORE_SHOWN, IS_TIME_EXPIRED, ERROR_MESSAGE, IS_LOADER_ACTIVE } from "./actionsTypes";
import { IUser } from "../models/response/IUser";

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

export const handleCheckboxClicked = (payload: boolean) => ({
    type: IS_CHECKBOX_CLICKED,
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

export const handleSetUser = (payload: IUser | null) => ({
    type: SET_USER,
    payload: payload,
});

export const handleShowForm = (payload: boolean) => ({
    type: SHOW_FORM,
    payload: payload,
});

export const handleTimerActive = (payload: boolean) => ({
    type: IS_TIMER_ACTIVE,
    payload: payload,
});

export const handleScoreShown = (payload: boolean) => ({
    type: IS_SCORE_SHOWN,
    payload: payload,
});

export const handleTimeExpired = (payload: boolean) => ({
    type: IS_TIME_EXPIRED,
    payload: payload,
});

export const handleErrorMessage = (payload: string) => ({
    type: ERROR_MESSAGE,
    payload: payload,
});

export const handleLoaderActive = (payload: boolean) => ({
    type: IS_LOADER_ACTIVE,
    payload: payload,
});