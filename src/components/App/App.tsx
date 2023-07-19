import React, { useEffect, FC } from "react";
import "antd/dist/reset.css";
import { Alert, Button } from "antd";
import { GlobalStyle, Wrapper } from "./App.styles";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../redux/store";
import QuestionsArray from "../QuestionsArray/QuestionsArray";
import LoginForm from "../LoginForm/LoginForm";
import AuthService from "../../services/AuthService";
import { handleShowForm, handleUserReg, handleSetUser, handleUserAuth, handleErrorMessage, handleLoaderActive } from "../../redux/actions";

const App: FC = () => {

    const dispatch = useDispatch();
    const newQuestions = useSelector((state: RootState) => state.questions);
    const userAuthStatus = useSelector((state: RootState) => state.userStatus.user_auth);
    const showForm = useSelector((state: RootState) => state.showForm.showForm);
    const isUserReg = useSelector((state: RootState) => state.userStatus.user_reg);
    const loader = useSelector((state: RootState) => state.isLoaderActive.is_loader_active);

    useEffect(() => {
        localStorage.getItem("token") && checkAuth();
    }, []);

    const checkAuth = async () => {
        dispatch(handleLoaderActive(true));
        dispatch(handleUserReg(true));
        try {
            const response = await AuthService.checkAuth();
            dispatch(handleUserAuth(true));
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            dispatch(handleErrorMessage("Что-то пошло не так.."));
        } finally {
            dispatch(handleLoaderActive(false));
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
                { loader && <Alert message="Загрузка..." /> }
            </Wrapper>
        </>
    )
};

export default App;