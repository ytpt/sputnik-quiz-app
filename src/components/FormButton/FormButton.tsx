import React from "react";
import { Button } from "antd";

type Props = {
    value: string;
    onClick: () => void;
}

const FormButton: React.FC<Props> = ({
    value,
    onClick,
}) => {

    return (
        <Button
            type="primary"
            htmlType="submit"
            onClick={ onClick }
        >
            { value }
        </Button>
    )
}

export default FormButton;