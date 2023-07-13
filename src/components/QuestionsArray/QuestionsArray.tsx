import React, {useState} from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { shuffleArray } from "../../utils";
import PaginationButton from "../PaginationButton/PaginationButton";
import ResultsButton from "../ResultsButton/ResultsButton";
import StartButton from "../StartButton/StartButton";
import LogoutButton from "../LogoutButton/LogoutButton";

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

    const isGameStarted = useSelector((state: RootState) => state.isGameStarted);
    const userScore = useSelector((state: RootState) => state.userScore);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);

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
                isGameStarted.is_game_started
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
            {
                !isGameStarted.is_game_started && userAuthStatus
                && <StartButton value={ "Начать?" } />
            }
            { userAuthStatus && <LogoutButton value="Выход" /> }
        </>
    )
};

export default QuestionsArray;