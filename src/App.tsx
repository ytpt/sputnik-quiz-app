import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { Difficulty, fetchQuizQuestions, QuestionState } from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";
import ResultsButton from "./components/ResultsButton/ResultsButton";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

export const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startQuiz = async () => {
        setLoading(true);
        setGameOver(false);

        const newQuestions = await fetchQuizQuestions(
            TOTAL_QUESTIONS,
            Difficulty.EASY
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;

            const correct = questions[number].correct_answer === answer;

            if (correct) setScore(prev => prev + 1);

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                { gameOver || userAnswers.length === TOTAL_QUESTIONS
                    ? (<button className="start" onClick={ startQuiz }>Начать</button>)
                    : null
                }
                { loading && <p>Загрузка...</p> }
                { !loading && !gameOver
                    && (<QuestionCard
                        questionNumber={ number + 1 }
                        question={ questions[number].question }
                        answers={ questions[number].answers }
                        userAnswer={ userAnswers ? userAnswers[number] : undefined }
                        callback={ checkAnswer }
                    />)
                }
                { !gameOver
                    && !loading
                    && userAnswers.length === number + 1
                    && number !== TOTAL_QUESTIONS - 1
                    && (<button
                        type="button"
                        className="next"
                        onClick={ nextQuestion }
                    >
                        Следующий вопрос
                    </button>)
                }
                { !loading && !gameOver
                    && (<ResultsButton
                        score={ score }
                        gameOver={ gameOver }
                        totalQuestions={ TOTAL_QUESTIONS }
                    />)
                }
            </Wrapper>
        </>
    )
};