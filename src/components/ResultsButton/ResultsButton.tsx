import React, { useState } from "react";

type Props = {
    score: number;
    gameOver: boolean;
    totalQuestions: number;
}

const ResultsButton: React.FC<Props> = ({
   score,
   gameOver,
   totalQuestions,
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
                    <p className="score">Верных: { score } из { totalQuestions }</p>
                    <p className="score">Неверных или неотвеченных: { totalQuestions - score } из { totalQuestions }</p>
                </div>
            }
        </>
    )
}

export default ResultsButton;