import { SHOW_QUESTIONS } from "./actionsTypes";
import { shuffleArray } from "../utils";

export interface IQuestion {
    id: number;
    question: string;
    options: string[];
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
        options: [
            "Малага",
            "Порто",
            "Лиссабон",
            "Барселона",
        ],
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
        options: [
            "Берлин",
            "Париж",
            "Рейкъявик",
            "Брюссель",
        ],
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
        options: [
            "Амстердам",
            "Эйндховен",
            "Осло",
            "Берген",
        ],
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
        options: [
            "Денпасар",
            "Ява",
            "Бали",
            "Джакарта",
        ],
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
        options: [
            "Пенанг",
            "Хошимин",
            "Куала-Лумпур",
            "Себу",
        ],
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
        options: [
            "Дубровник",
            "Сплит",
            "Загреб",
            "Стон",
        ],
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
        options: [
            "Осло",
            "Берген",
            "Тронхейм",
            "Ставангер",
        ],
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
        options: [
            "Будва",
            "Рафаиловичи",
            "Бар",
            "Подгорица",
        ],
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
        options: [
            "Сайгон",
            "Ханой",
            "Хошимин",
            "Муйне",
        ],
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
        options: [
            "Паттайя",
            "Самуи",
            "Бангкок",
            "Пхукет",
        ],
        correct_answer: "Бангкок",
        incorrect_answers: [
            "Паттайя",
            "Самуи",
            "Пхукет",
        ]
    }
];

const questionReducer = (state: IQuestions = initialState, action: IAction) => {
    switch(action.type) {
        case SHOW_QUESTIONS:
            return state.map((question: IQuestion) => ({
               ...question,
               options: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ]),
            }));
        default:
            return state;
    }
}

export default questionReducer;