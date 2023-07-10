import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { handleStartQuiz, resetUserScore } from "../../redux/actions";
import { Button } from "antd";

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
        dispatch(resetUserScore(0));
    }

    return (
        <>
            {
                isGameStarted.is_game_started && !isScoreShown
                    && <Button
                        type="primary"
                        className="results"
                        onClick={ showResult }
                    >
                            Узнать результат
                    </Button>
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
                    && <Button
                            type="primary"
                            onClick={ restartQuiz }
                        >
                            Начать заново?
                        </Button>
            }
        </>
    )
}

export default ResultsButton;