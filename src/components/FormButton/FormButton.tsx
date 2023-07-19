import React, { FC } from "react";
import { Button } from "antd";

type Props = {
    value: string;
    onClick: () => void;
    disabled: boolean;
}

const FormButton: FC<Props> = ({
    value,
    onClick,
    disabled,
}) => {

    return (
        <Button
            type="primary"
            htmlType="submit"
            onClick={ (e) => e.preventDefault && onClick }
            disabled={ disabled }
        >
            { value }
        </Button>
    )
}

export default FormButton;