import React from "react";
import { Wrapper } from "./ChkBox.styles";

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

    const onClick = () => {
        console.log(right)
        console.log(variant)
        console.log(variant === right);
        setClicked(true);
    };

    return (
        <Wrapper>
            <label>
                <input
                    type="checkbox"
                    onClick={ onClick }
                    id={ variant }
                    disabled={ clicked }
                />
                <p>{ label }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;