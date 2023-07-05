import React, { useState } from "react";
import StartButton from "../StartButton/StartButton";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
    userScore: number;
    totalQuestionsCount: number;
}

const ResultsButton: React.FC<Props> = ({
    userScore,
    totalQuestionsCount,
}) => {

    const startQuiz = useSelector((state: RootState) => state.startQuiz);

    const [isScoreShown, setScoreShown] = useState(false);

    const showResult = () => {
        setScoreShown(true);

        //Все чекбоксы становятся неактивными
    }

    return (
        <>
            {
                startQuiz.start_quiz && !isScoreShown
                    && <button
                        type="button"
                        className="results"
                        onClick={ showResult }
                    >
                            Узнать результат
                    </button>
            }
            {
                !startQuiz.start_quiz || isScoreShown
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
                startQuiz.start_quiz  && isScoreShown
                    && <StartButton value={ "Начать заново?" } />
            }
        </>
    )
}

export default ResultsButton;