import { shuffleArray } from "./utils";

export type Question = {
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
}

export type QuestionState = Question & { answers: string[] };

export const getQuizQuestions = () => {
    const data = [
        {
            question: "Столица Португалии?",
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
            question: "Столица Бельгии?",
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
            question: "Столица Нидерландев?",
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
            question: "Столица Индонезии?",
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
            question: "Столица Малайзии?",
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
            question: "Столица Хорватии?",
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
            question: "Столица Норвегии?",
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
            question: "Столица Черногории?",
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
            question: "Столица Вьетнама?",
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
        }
   ]

    return data.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ]),
        }
    ))
}