import React, { useState, FC }  from 'react';
import { Form, Input } from 'antd';
import AuthService from "../../services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { handleSetUser, handleUserAuth, handleUserReg } from "../../redux/actions";
import { RootState } from "../../redux/store";
import FormButton from "../FormButton/FormButton";

const LoginForm: FC = () => {

    const dispatch = useDispatch();
    const userRegStatus = useSelector((state: RootState) => state.userStatus.user_reg);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [warnMessage, setWarnMessage] = useState<string>("");

    const performAuth = async (email: string, password: string, isRegistration: boolean) => {
        try {
            const response = isRegistration
                ? await AuthService.registration(email, password)
                : await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('login', response.data.user.email);
            dispatch(
                isRegistration
                    ? handleUserReg(true)
                    : handleUserAuth(true));
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            console.log(e.response?.data?.message);
            setWarnMessage("Не получилось, попробуйте ещё раз!");
        }
    }

    const login = async (email: string, password: string) => {
        await performAuth(email, password, false);
    }

    const registration = async (email: string, password: string) => {
        await performAuth(email, password, true);
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Невалидный e-mail!', type: "email" }]}
                hasFeedback
            >
                <Input
                    type="text"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Невалидный пароль!', whitespace: true, min: 3 }]}
                hasFeedback
            >
                <Input.Password
                    type="password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                {
                    userRegStatus
                        ? <FormButton
                            value="Вход"
                            onClick={ () => login(email, password) }
                        />
                        : <FormButton
                            value="Регистрация"
                            onClick={ () => registration(email, password) }
                        />
                }
            </Form.Item>
            { warnMessage }
        </Form>
    )
}

export default LoginForm;