import React, { useState } from "react";

type Props = {
    userScore: number;
    gameOver: boolean;
    totalQuestionsCount: number;
}

const ResultsButton: React.FC<Props> = ({
    userScore,
    gameOver,
    totalQuestionsCount,
}) => {
    const [isScoreShown, setScoreShown] = useState(false);

    const showResult = () => {
        setScoreShown(true);
    }

    return (
        <>
            { !isScoreShown
            && <button
                type="button"
                className="results"
                onClick={ showResult }
            >
                Узнать результат
            </button>
            }
            { gameOver || isScoreShown
            && <div>
                <p className="score">Верных: { userScore } из { totalQuestionsCount }</p>
                <p className="score">Неверных или неотвеченных: { totalQuestionsCount - userScore } из { totalQuestionsCount }</p>
            </div>
            }
        </>
    )
}

export default ResultsButton;