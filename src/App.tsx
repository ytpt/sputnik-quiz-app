import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useSelector } from "react-redux";
import ResultsButton from "./components/ResultsButton/ResultsButton";
import { RootState } from "./redux/store";
import StartButton from "./components/StartButton/StartButton";

export const App = () => {

    const startQuiz = useSelector((state: RootState) => state.startQuiz);
    const newQuestions = useSelector((state: RootState) => state.questions);
    const userScore = useSelector((state: RootState) => state.userScore);

    const [totalQuestionsCount, setTotalQuestionsCount] = useState(newQuestions.length);

    // Нужно добавить пагинацию по 5 вопрсоов на страницу
    // const [pageNumber, setPageNumber] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    startQuiz.start_quiz
                        && newQuestions.map((question, index) => (
                            <QuestionCard
                                key={ index }
                                questionNumber={ index }
                                question={ question.question }
                                answers={[
                                    ...question.incorrect_answers,
                                    question.correct_answer
                                ]}
                                right={ question.correct_answer }
                            />
                        ))
                }
                {
                    startQuiz.start_quiz
                        && <ResultsButton
                            userScore={ userScore.user_score }
                            totalQuestionsCount={ totalQuestionsCount }
                        />
                }
                { !startQuiz.start_quiz && <StartButton value={ "Начать?" } /> }
            </Wrapper>
        </>
    )
};