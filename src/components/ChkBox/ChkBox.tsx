import React from "react";
import { Wrapper } from "./ChkBox.styles";
import { useDispatch } from "react-redux";
import { addUserScore } from "../../redux/actions";
import { Checkbox } from "antd";

type Props = {
    variant: string;
    label: string;
    right: string;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
    selectedAnswer: string | null;
    setSelectedAnswer: (answer: string) => void;
    isTimeExpired: boolean;
}

const ChkBox: React.FC<Props> = ({
     variant,
     label,
     right,
     isClicked,
     selectedAnswer,
     setSelectedAnswer,
     isTimeExpired,
}) => {

    const dispatch = useDispatch();

    const checkAnswers = () => {
        variant === right && dispatch(addUserScore(1));
        setSelectedAnswer(variant);
    };

    return (
        <Wrapper>
            <label>
                <Checkbox
                    type="checkbox"
                    onClick={ checkAnswers }
                    id={ variant }
                    disabled={ isClicked || isTimeExpired }
                    checked={ selectedAnswer === variant }
                />
                <p>{ label }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;