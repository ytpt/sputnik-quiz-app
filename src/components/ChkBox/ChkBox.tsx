import React from "react";
import { Wrapper } from "./ChkBox.styles";

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
}

const ChkBox: React.FC<Props> = ({
    value,
    onChange,
    disabled,
}) => {

    return (
        <Wrapper>
            <label>
                <input
                    type="checkbox"
                    name={ value }
                />
                <p>{ value }</p>
            </label>
        </Wrapper>
    )
}

export default ChkBox;