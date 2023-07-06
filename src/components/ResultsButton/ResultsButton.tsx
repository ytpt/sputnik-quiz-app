import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { handleStartQuiz } from "../../redux/actions";

type Props = {
    userScore: number;
    totalQuestionsCount: number;
    setIsClicked: (boolean) => void;
}

const ResultsButton: React.FC<Props> = ({
    userScore,
    totalQuestionsCount,
    setIsClicked,
}) => {

    const dispatch = useDispatch();
    const isGameStarted = useSelector((state: RootState) => state.isGameStarted);

    const [isScoreShown, setScoreShown] = useState(false);

    const showResult = () => {
        setScoreShown(true);
        setIsClicked(true);
    }

    const restartQuiz = () => {
        setIsClicked(false);
        dispatch(handleStartQuiz(false));
    }

    return (
        <>
            {
                isGameStarted.is_game_started && !isScoreShown
                    && <button
                        type="button"
                        className="results"
                        onClick={ showResult }
                    >
                            Узнать результат
                    </button>
            }
            {
                !isGameStarted.is_game_started || isScoreShown
                    && (<div>
                            <p className="score">Верных:
                                { userScore } из { totalQuestionsCount }
                            </p>
                            <p className="score">Неверных или неотвеченных:
                                { totalQuestionsCount - userScore } из { totalQuestionsCount }
                            </p>
                    </div>)
            }
            {
                isGameStarted.is_game_started  && isScoreShown
                    &&  <button onClick={ restartQuiz }>
                        Начать заново?
                    </button>
            }
        </>
    )
}

export default ResultsButton;