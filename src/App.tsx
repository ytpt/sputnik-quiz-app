import React, { useState } from "react";
import 'antd/dist/reset.css';
import { GlobalStyle, Wrapper } from "./App.styles";
import { useSelector } from "react-redux";
import ResultsButton from "./components/ResultsButton/ResultsButton";
import { RootState } from "./redux/store";
import StartButton from "./components/StartButton/StartButton";
import PaginationButton from "./components/PaginationButton/PaginationButton";
import QuestionsArray from "./components/QuestionsArray/QuestionsArray";

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
                    <QuestionsArray
                        newQuestions={ newQuestions }
                        startIndex={ startIndex }
                        endIndex={ endIndex }
                        isClicked={ isClicked }
                        setIsClicked={ setIsClicked }
                    />
                {
                    isGameStarted.is_game_started && newQuestions.length > endIndex
                        && <PaginationButton
                                onClick={ handleNextPage }
                                value="Следующая страница"
                            />
                        || page > 1
                            && <PaginationButton
                                onClick={ handlePrevPage }
                                value="Предыдущая страница"
                            />
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