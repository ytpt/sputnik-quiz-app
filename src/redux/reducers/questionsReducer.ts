import { shuffleArray } from "../../utils";

export interface IQuestion {
    id: number;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type IQuestions = IQuestion[];

interface IAction {
    type: string;
    payload: number;
}

export const initialState: IQuestions = [
    {
        id: 1,
        question: "Столица Португалии",
        correct_answer: "Лиссабон",
        incorrect_answers: [
            "Малага",
            "Порто",
            "Барселона",
        ]
    },
    {
        id: 2,
        question: "Столица Бельгии",
        correct_answer: "Брюссель",
        incorrect_answers: [
            "Берлин",
            "Париж",
            "Рейкъявик",
        ]
    },
    {
        id: 3,
        question: "Столица Нидерландев",
        correct_answer: "Амстердам",
        incorrect_answers: [
            "Эйндховен",
            "Осло",
            "Берген",
        ]
    },
    {
        id: 4,
        question: "Столица Индонезии",
        correct_answer: "Джакарта",
        incorrect_answers: [
            "Денпасар",
            "Ява",
            "Бали",
        ]
    },
    {
        id: 5,
        question: "Столица Малайзии",
        correct_answer: "Куала-Лумпур",
        incorrect_answers: [
            "Пенанг",
            "Хошимин",
            "Себу",
        ]
    },
    {
        id: 6,
        question: "Столица Хорватии",
        correct_answer: "Загреб",
        incorrect_answers: [
            "Дубровник",
            "Сплит",
            "Стон",
        ]
    },
    {
        id: 7,
        question: "Столица Норвегии",
        correct_answer: "Осло",
        incorrect_answers: [
            "Берген",
            "Тронхейм",
            "Ставангер",
        ]
    },
    {
        id: 8,
        question: "Столица Черногории",
        correct_answer: "Подгорица",
        incorrect_answers: [
            "Будва",
            "Рафаиловичи",
            "Бар",
        ]
    },
    {
        id: 9,
        question: "Столица Вьетнама",
        correct_answer: "Ханой",
        incorrect_answers: [
            "Сайгон",
            "Хошимин",
            "Муйне",
        ]
    },
    {
        id: 10,
        question: "Столица Тайланда",
        correct_answer: "Бангкок",
        incorrect_answers: [
            "Паттайя",
            "Самуи",
            "Пхукет"
        ]
    }
];

const questionReducer = (state: IQuestions = initialState, action: IAction) => {
    switch(action.type) {
        default:
            return state.map((question: IQuestion) => ({
                ...question,
                answers: shuffleArray([
                    ...question.incorrect_answers,
                    question.correct_answer,
                ]),
            }));
    }
}

export default questionReducer;