import React from "react";
import { useDispatch } from "react-redux";
import { handleStartQuiz, handleUserScoreChange } from "../../redux/actions";

type Props = {
    value: string;
}

const StartButton: React.FC<Props> = ({
    value,
}) => {

    const dispatch = useDispatch();

    const startNewGame = () => {
        dispatch(handleStartQuiz(true));
        dispatch(handleUserScoreChange(0));
    }

    return (
        <>
            <button onClick={ startNewGame }>
                { value }
            </button>
        </>
    )
}

export default StartButton;