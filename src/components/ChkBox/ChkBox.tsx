import React from "react";
import { Wrapper } from "./ChkBox.styles";
import { useDispatch } from "react-redux";
import { handleUserScoreChange } from "../../redux/actions";

type Props = {
    variant: string;
    label: string;
    right: string;
    isClicked: boolean;
    setIsClicked: (boolean) => void;
}

const ChkBox: React.FC<Props> = ({
     variant,
     label,
     right,
     isClicked,

}) => {

    const dispatch = useDispatch();

    const checkAnswers = () => {
        variant === right && dispatch(handleUserScoreChange(1));
    };

    return (
        <Wrapper>
            <label>
                <input
                    type="checkbox"
                    onClick={ checkAnswers }
                    id={ variant }
                    disabled={ isClicked }
                />
                <p>{ label }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;