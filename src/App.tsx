import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useSelector, useDispatch } from "react-redux";
import { handleUserScoreChange } from "./redux/actions";
import { shuffleArray } from "./utils";
import ResultsButton from "./components/ResultsButton/ResultsButton";
import { RootState } from "./redux/store";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

export const App = () => {

    const newQuestions = useSelector((state: RootState) => state.questions);
    const userScore = useSelector((state: RootState) => state.userScore);
    const dispatch = useDispatch();

    const [totalQuestionsCount, setTotalQuestionsCount] = useState(newQuestions.length);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [gameOver, setGameOver] = useState(true);

    const startQuiz = () => {

        setGameOver(false);
        dispatch(handleUserScoreChange(0));
        setUserAnswers([]);
        setNumber(0);
    }

    const checkAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value;

            const correct = newQuestions[number].correct_answer === answer;

            if (correct) dispatch(handleUserScoreChange(1));

            const answerObject = {
                question: newQuestions[number].question,
                answer,
                correct,
                correctAnswer: newQuestions[number].correct_answer,
            }
            setUserAnswers((prev) => [...prev, answerObject]);

            setGameOver(true);
        }
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    gameOver
                        && (<button className="start" onClick={ startQuiz }>
                            Начать
                        </button>)
                }
                {
                    !gameOver
                        && shuffleArray(newQuestions).map((question, index) => (
                            <QuestionCard
                                key={ index }
                                questionNumber={ index }
                                question={ question.question }
                                answers={[
                                    ...question.incorrect_answers,
                                    question.correct_answer
                                ]}
                                userAnswer={ userAnswers ? userAnswers[number] : undefined }
                                callback={ checkAnswer }
                            />
                        ))
                }
                {
                    !gameOver
                        && <ResultsButton
                            userScore={ userScore.user_score }
                            gameOver={ gameOver }
                            totalQuestionsCount={ totalQuestionsCount }
                        />
                }
            </Wrapper>
        </>
    )
};