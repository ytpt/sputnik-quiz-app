import React, { useEffect, FC } from "react";
import "antd/dist/reset.css";
import { Button } from "antd";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import QuestionsArray from "./components/QuestionsArray/QuestionsArray";
import LoginForm from "./components/LoginForm/LoginForm";
import { handleShowForm, handleUserReg } from "./redux/actions";
import { handleSetUser, handleUserAuth } from "./redux/actions";
import AuthService from "./services/AuthService";

export const App: FC = () => {

    const dispatch = useDispatch();
    const newQuestions = useSelector((state: RootState) => state.questions);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);
    const showForm = useSelector((state: RootState) => state.showForm.showForm);
    const isUserReg = useSelector((state: RootState) => state.userStatus.user_reg);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        localStorage.getItem("token") && dispatch(handleUserReg(true));
        try {
            const response = await AuthService.checkAuth();
            dispatch(handleUserAuth(true));
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            return;
        }
    }

    const openForm = () => dispatch(handleShowForm(true));

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    userAuthStatus
                        ? <QuestionsArray newQuestions={ newQuestions } />
                        : showForm || isUserReg
                            ? <LoginForm />
                            : <Button onClick={ openForm }>
                                Регистрация
                            </Button>
                }
            </Wrapper>
        </>
    )
};