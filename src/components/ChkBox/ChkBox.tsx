import React from "react";
import { Wrapper } from "./ChkBox.styles";
import { useDispatch, useSelector } from "react-redux";
import { addUserScore } from "../../redux/actions";
import { Checkbox } from "antd";
import { RootState } from "../../redux/store";

type Props = {
    variant: string;
    label: string;
    right: string;
    selectedAnswer: string | null;
    setSelectedAnswer: (answer: string) => void;
}

const ChkBox: React.FC<Props> = ({
     variant,
     label,
     right,
     selectedAnswer,
     setSelectedAnswer,
}) => {

    const dispatch = useDispatch();
    const isTimeExpired = useSelector((state: RootState) => state.isTimeExpired.is_timer_expired);
    const isCheckboxClicked = useSelector((state: RootState) => state.isCheckboxClicked.is_checkbox_clicked);

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
                    disabled={ isCheckboxClicked || isTimeExpired }
                    checked={ selectedAnswer === variant }
                />
                <p>{ label }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;