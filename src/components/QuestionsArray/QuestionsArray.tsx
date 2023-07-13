import React, { useEffect, useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { shuffleArray } from "../../utils";
import PaginationButton from "../PaginationButton/PaginationButton";
import ResultsButton from "../ResultsButton/ResultsButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { handleStartQuiz, resetUserScore} from "../../redux/actions";

type Props = {
    newQuestions: any;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
}

const QuestionsArray: React.FC<Props> = ({
    newQuestions,
    isClicked,
    setIsClicked,
}) => {

    const userScore = useSelector((state: RootState) => state.userScore);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);

    const dispatch = useDispatch();

    useEffect(() => {
        const startNewGame = () => {
            dispatch(handleStartQuiz(true));
            dispatch(resetUserScore(0));
        }
        startNewGame();
    }, []);

    const totalQuestionsCount = newQuestions.length;
    const [page, setPage] = useState(1);
    const limit = 5;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const handlePrevPage = () => {
        setPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        setPage((nextPage) => nextPage + 1);
    };

    const shuffledQuestions = newQuestions
        .slice(startIndex, endIndex)
        .map((question) => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }));

    return (
        <>
            {
                userAuthStatus
                    && shuffledQuestions.map((question, index) => (
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
                userAuthStatus && newQuestions.length > endIndex
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
                userAuthStatus
                    && <ResultsButton
                        userScore={ userScore.user_score }
                        totalQuestionsCount={ totalQuestionsCount }
                        setIsClicked={ setIsClicked }
                    />
            }
            { userAuthStatus && <LogoutButton value="Выход" /> }
        </>
    )
};

export default QuestionsArray;