import React from "react";
import { useDispatch } from "react-redux";
import { handleStartQuiz, resetUserScore } from "../../redux/actions";
import { Button } from "antd";

type Props = {
    value: string;
}

const StartButton: React.FC<Props> = ({
    value,
}) => {

    const dispatch = useDispatch();

    const startNewGame = () => {
        dispatch(handleStartQuiz(true));
        dispatch(resetUserScore(0));
    }

    return (
        <>
            <Button onClick={ startNewGame }>
                { value }
            </Button>
        </>
    )
}

export default StartButton;