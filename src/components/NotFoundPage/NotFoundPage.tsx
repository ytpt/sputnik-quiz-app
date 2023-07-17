import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { GlobalStyle, Wrapper } from "./NotFoundPage.styles";

const NotFoundPage: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>404 - Страница не найдена</h1>
                <Button>
                    <Link to="/">Вернуться к игре</Link>
                </Button>
            </Wrapper>
        </>
    )
};

export default NotFoundPage;