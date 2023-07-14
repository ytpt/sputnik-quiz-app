import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { RootState } from "../../redux/store";

type Props = {
    userScore: number;
    totalQuestionsCount: number;
    startNewGame: () => void;
}

const Results: FC<Props> = ({
    userScore,
    totalQuestionsCount,
    startNewGame,
}) => {

    const activeTimer = useSelector((state: RootState) => state.isTimerActive.is_timer_active);
    const isScoreShown = useSelector((state: RootState) => state.isScoreShown.is_score_shown);

    return (
        <>
            {
                isScoreShown && !activeTimer
                    && (<div>
                            <div>
                                <p className="score">Верных:
                                    { userScore } из { totalQuestionsCount }
                                </p>
                                <p className="score">Неверных или неотвеченных:
                                    { totalQuestionsCount - userScore } из { totalQuestionsCount }
                                </p>
                            </div>
                            <Button type="primary" onClick={ startNewGame }>Начать заново?</Button>
                    </div>
                )
            }
        </>
    )
}

export default Results;