import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useSelector, useDispatch } from "react-redux";
import { handleUserScoreChange } from "./redux/actions";
import { IState } from "./redux/userScoreReducer";
import { initialState, IQuestions } from "../src/redux/questionsReducer";
import { shuffleArray } from "./utils";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

export const App = () => {
    const [questions, setQuestions] = useState<IQuestions>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [gameOver, setGameOver] = useState(true);

    const userScore: number = useSelector((state: IState) => state.user_score);
    const dispatch = useDispatch();

    const startQuiz = () => {
        setGameOver(false);
        const newQuestions: IQuestions = shuffleArray(initialState);
        setQuestions(newQuestions);
        dispatch(handleUserScoreChange(0));
        setUserAnswers([]);
        setNumber(0);
    }

    const checkAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;

            const correct = questions[number].correct_answer === answer;

            if (correct) dispatch(handleUserScoreChange(userScore + 1));

            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    }


    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                { gameOver || userAnswers.length === TOTAL_QUESTIONS
                    ? (<button className="start" onClick={ startQuiz }>
                            Начать
                        </button>)
                    : null
                }
                { !gameOver
                    && questions.map((question, index) => (
                        <QuestionCard
                            questionNumber={ index }
                            question={ question.question }
                            answers={ question.options }
                            userAnswer={ userAnswers ? userAnswers[number] : undefined }
                            callback={ checkAnswer }
                        />
                    ))
                }
                { !gameOver && <p className="score">Верно: { userScore }</p> }
            </Wrapper>
        </>
    )
};