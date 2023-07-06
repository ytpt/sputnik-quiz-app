import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useSelector } from "react-redux";
import ResultsButton from "./components/ResultsButton/ResultsButton";
import { RootState } from "./redux/store";
import StartButton from "./components/StartButton/StartButton";

export const App = () => {

    const isGameStarted = useSelector((state: RootState) => state.isGameStarted);
    const newQuestions = useSelector((state: RootState) => state.questions);
    const userScore = useSelector((state: RootState) => state.userScore);

    const [totalQuestionsCount, setTotalQuestionsCount] = useState(newQuestions.length);
    const [isClicked, setIsClicked] = useState(false);

    // Нужно добавить пагинацию по 5 вопрсоов на страницу
    // const [pageNumber, setPageNumber] = useState(0);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    isGameStarted.is_game_started
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
                                isClicked={ isClicked }
                                setIsClicked={ setIsClicked }
                            />
                        ))
                }
                {
                    isGameStarted.is_game_started
                        && <ResultsButton
                            userScore={ userScore.user_score }
                            totalQuestionsCount={ totalQuestionsCount }
                            setIsClicked={ setIsClicked }
                        />
                }
                { !isGameStarted.is_game_started && <StartButton value={ "Начать?" } /> }
            </Wrapper>
        </>
    )
};