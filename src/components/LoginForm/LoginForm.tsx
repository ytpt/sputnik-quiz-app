import React, { useState, FC }  from 'react';
import { Button, Form, Input } from 'antd';
import AuthService from "../../services/AuthService";
import { IUser } from "../../models/response/IUser";
import { useDispatch, useSelector } from "react-redux";
import { handleUserAuth, handleUserReg } from "../../redux/actions";
import { RootState } from "../../redux/store";


const LoginForm: FC = () => {
    const userRegStatus = useSelector((state: RootState) => state.userStatus.user_reg);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [user, setUser] = useState<IUser | null>(null);
    const dispatch = useDispatch();

    const registration = async function(email: string, password: string) {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            setUser(response.data.user);
            dispatch(handleUserReg(true));
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }

    const login = async function(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem("token", response.data.accessToken);
            setUser(response.data.user);
            dispatch(handleUserAuth(true));
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }

    const logout = async function() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem("token");
            dispatch(handleUserAuth(false));
            setUser({} as IUser);
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={ onFinish }
            onFinishFailed={ onFinishFailed }
            autoComplete="off"
        >
            <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Введите e-mail!' }]}
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
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password
                    type="password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                {
                    userRegStatus
                        ? <Button
                            type="primary"
                            htmlType="submit"
                            onClick={ () => login(email, password) }
                        >
                            Вход
                        </Button>
                        : <Button
                            type="primary"
                            htmlType="submit"
                            onClick={ () => registration(email, password) }
                        >
                            Регистрация
                        </Button>
                }
            </Form.Item>
        </Form>
    )
}

export default LoginForm;