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

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((nextPage) => nextPage + 1);
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    isGameStarted.is_game_started
                        && newQuestions
                            .slice(startIndex, endIndex)
                            .map((question, index) => (
                                <QuestionCard
                                    key={ index }
                                    questionNumber={ index + startIndex }
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
                    isGameStarted.is_game_started && newQuestions.length > endIndex
                        && <button onClick={ handleNextPage }>
                            Следующая страница
                        </button>
                            || page > 1
                                && <button onClick={ handlePrevPage }>
                                    Назад
                                </button>
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