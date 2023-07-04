import {
    CHANGE_USER_SCORE,
    SHOW_QUESTIONS
} from "./actionsTypes";

export const handleUserScoreChange = (payload) => ({
    type: CHANGE_USER_SCORE,
    payload,
});

export const handleQuestions = (payload) => ({
    type: SHOW_QUESTIONS,
    payload,
});
