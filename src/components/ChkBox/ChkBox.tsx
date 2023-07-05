import React from "react";
import { Wrapper } from "./ChkBox.styles";
import { useDispatch } from "react-redux";
import { handleUserScoreChange } from "../../redux/actions";

type Props = {
    variant: string;
    label: string;
    right: string;
    clicked: boolean;
    setClicked: (boolean) => void;
}

const ChkBox: React.FC<Props> = ({
     variant,
     label,
     right,
     clicked,
     setClicked,
}) => {

    const dispatch = useDispatch();

    const checkAnswers = () => {
        setClicked(true);
        variant === right && dispatch(handleUserScoreChange(1));
    };

    return (
        <Wrapper>
            <label>
                <input
                    type="checkbox"
                    onClick={ checkAnswers }
                    id={ variant }
                    disabled={ clicked }
                />
                <p>{ label }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;