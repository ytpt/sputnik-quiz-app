import React, { useEffect, useState, FC } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { shuffleArray } from "../../utils";
import PaginationButton from "../PaginationButton/PaginationButton";
import Results from "../Results/Results";
import LogoutButton from "../LogoutButton/LogoutButton";
import { handleCheckboxClicked, handleScoreShown, handleStartQuiz, handleTimeExpired, handleTimerActive, resetUserScore } from "../../redux/actions";
import { IQuestion } from "../../redux/reducers/questionsReducer";

type Props = {
    newQuestions: IQuestion[];
}

type SelectedAnswers = {
    [questionNumber: number]: string | null;
}

const QuestionsArray: FC<Props> = ({
    newQuestions,
}) => {

    const dispatch = useDispatch();
    const userScore = useSelector((state: RootState) => state.userScore.user_score);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);
    const isGameStarted = useSelector((state: RootState) => state.isGameStarted.is_game_started);
    const activeTimer = useSelector((state: RootState) => state.isTimerActive.is_timer_active);
    const isScoreShown = useSelector((state: RootState) => state.isScoreShown.is_score_shown);

    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({});

    const totalQuestionsCount = newQuestions.length;
    const [page, setPage] = useState(1);
    const limit = 5, startIndex = (page - 1) * limit, endIndex = startIndex + limit;

    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        setSelectedAnswers({});
        dispatch(resetUserScore(0));
        dispatch(handleCheckboxClicked(false));
        dispatch(handleStartQuiz(true));
        dispatch(handleTimerActive(true));
        dispatch(handleScoreShown(false));
        dispatch(handleTimeExpired(false));
        timer();
    }

    const handlePrevPage = () => setPage((prevPage) => prevPage - 1);
    const handleNextPage = () => setPage((nextPage) => nextPage + 1);

    const shuffledQuestions = newQuestions
        .slice(startIndex, endIndex)
        .map((question) => ({
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ])
        }));

   let seconds: number = 0;
   let interval: ReturnType<typeof setTimeout>;

   const timer = (minutes: number = 1) => {
       seconds = minutes * 60 || 0;
       dispatch(handleTimerActive(true));

       interval = setInterval(() => {
           seconds--;

           if (!seconds) {
               clearInterval(interval);
               dispatch(handleTimerActive(false));
               dispatch(handleScoreShown(true));
               dispatch(handleTimeExpired(true));
               alert("Время вышло :(");
           }
       }, 1000);
   }

    const handleSelectAnswer = (questionNumber: number, answer: string) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
            ...prevSelectedAnswers,
            [questionNumber]: answer,
        }));
    };

    return (
        <>
            {/*Questions*/}
            {
                isGameStarted
                    && shuffledQuestions.map((question, index) => (
                        <QuestionCard
                            key={ index }
                            questionNumber={ index + startIndex }
                            question={ question.question }
                            answers={ [...question.incorrect_answers, question.correct_answer] }
                            right={ question.correct_answer }
                            selectedAnswer={ selectedAnswers[index + startIndex] || null }
                            setSelectedAnswer={ (answer) => handleSelectAnswer(index + startIndex, answer) }
                        />
                    ))
            }
            {/*Pagination*/}
            {
                isGameStarted && newQuestions.length > endIndex && !isScoreShown
                    && <PaginationButton onClick={ handleNextPage } value="Следующая страница" />
                    || page > 1
                        &&<PaginationButton onClick={ handlePrevPage } value="Предыдущая страница" />
            }
            {/*Timer*/}
            {
                isGameStarted && !activeTimer
                    && <Results
                            userScore={ userScore }
                            totalQuestionsCount={ totalQuestionsCount }
                            startNewGame={ startNewGame }
                    />
            }
            {/*Logout*/}
            { isGameStarted && userAuthStatus && <LogoutButton value="Выход" /> }
        </>
    )
};

export default QuestionsArray;