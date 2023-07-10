import React from "react";
import { Button } from "antd";

type Props = {
    onClick: () => void;
    value: string;
}

const PaginationButton: React.FC<Props> = ({
    onClick,
    value,
}) => {

    return (
        <div>
            <Button onClick={ onClick }>
                { value }
            </Button>
        </div>
    )
}

export default PaginationButton;