import { CHANGE_USER_SCORE } from "./actionsTypes";
import { START_QUIZ } from "./actionsTypes";

export const handleUserScoreChange = (payload) => ({
    type: CHANGE_USER_SCORE,
    payload: payload,
});

export const handleStartQuiz = (payload) => ({
    type: START_QUIZ,
    payload: payload,
});
