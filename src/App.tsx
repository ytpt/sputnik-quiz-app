import React, { useEffect, useState } from "react";
import 'antd/dist/reset.css';
import { Button } from "antd";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import QuestionsArray from "./components/QuestionsArray/QuestionsArray";
import LoginForm from "./components/LoginForm/LoginForm";
import { handleShowForm, handleUserReg } from "./redux/actions";
import axios from "axios";
import { AuthResponse } from "./models/response/AuthResponse";
import { API_URL } from "./http";
import { handleSetUser, handleUserAuth } from "./redux/actions";

export const App = () => {

    const dispatch = useDispatch();
    const newQuestions = useSelector((state: RootState) => state.questions);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);
    const showForm = useSelector((state: RootState) => state.showForm.showForm);
    const userRegStatus = useSelector((state: RootState) => state.userStatus.user_reg);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        localStorage.getItem("token") && dispatch(handleUserReg(true));

        const checkAuth = async function() {
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
                console.log(response);
                dispatch(handleUserAuth(true));
                dispatch(handleSetUser(response.data.user));
            } catch(e) {
                console.log(e.response?.data?.message);
            }
        }
        checkAuth();
    }, []);

    const openForm = () => {
        dispatch(handleShowForm(true));
    }

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <h1>Квиз</h1>
                {
                    userAuthStatus
                        ? <QuestionsArray
                            newQuestions={newQuestions}
                            isClicked={isClicked}
                            setIsClicked={setIsClicked}
                        />
                        : showForm || userRegStatus
                            ? <LoginForm />
                            : <Button onClick={ openForm }>
                                Регистрация
                            </Button>
                }
            </Wrapper>
        </>
    )
};