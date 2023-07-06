import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/store";
import {handleStartQuiz, handleUserScoreChange} from "../../redux/actions";

type Props = {
    userScore: number;
    totalQuestionsCount: number;
}

const ResultsButton: React.FC<Props> = ({
    userScore,
    totalQuestionsCount,
}) => {

    const dispatch = useDispatch();
    const startQuiz = useSelector((state: RootState) => state.startQuiz);

    const [isScoreShown, setScoreShown] = useState(false);

    const showResult = () => {
        setScoreShown(true);

        //Все чекбоксы становятся неактивными
    }

    const restartQuiz = () => {
        dispatch(handleStartQuiz(false));
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
                    &&  <button onClick={ restartQuiz }>
                        Начать заново?
                    </button>
            }
        </>
    )
}

export default ResultsButton;