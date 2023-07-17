import React, { useState, FC }  from "react";
import { Form, Input } from "antd";
import AuthService from "../../services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { handleErrorMessage, handleSetUser, handleUserAuth, handleUserReg } from "../../redux/actions";
import { RootState } from "../../redux/store";
import FormButton from "../FormButton/FormButton";
import { FormInstance } from "antd";

type Props = {};

const LoginForm: FC<Props> = () => {

    const dispatch = useDispatch();
    const userRegStatus = useSelector((state: RootState) => state.userStatus.user_reg);
    const errorMessage = useSelector((state: RootState) => state.errorMessage.error_message);

    const [form] = Form.useForm<FormInstance>();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const performAuth = async (email: string, password: string, isRegistration: boolean) => {
        try {
            const response = isRegistration
                ? await AuthService.registration(email, password)
                : await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('login', response.data.user.email);
            dispatch(isRegistration ? handleUserReg(true) : handleUserAuth(true))
            dispatch(
                isRegistration
                    ? handleErrorMessage(`Вы зарегистрированы как ${response.data.user.email}`)
                    : handleErrorMessage(`Вы вошли как ${response.data.user.email}`)
            )
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            dispatch(
                isRegistration
                    ? handleErrorMessage(`Пользователь не зарегистрирован`)
                    : handleErrorMessage(`Пользователь не авторизован`)
            )
        }
    }

    const formValidation = async (values: any) => {
        userRegStatus
            ? await performAuth(values.email, values.password, false)
            : await performAuth(values.email, values.password, true)
    }

    return (
        <Form
            form={ form }
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={ formValidation }
        >
            <Form.Item
                label="E-mail"
                name="email"
                hasFeedback
                rules={[
                    { required: true, message: "Введите e-mail!"  },
                    { type: "email", message: "Невалидный e-mail" },
                ]}
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
                hasFeedback
                rules={[
                    { required: true, message: "Введите пароль!" },
                    { whitespace: true, message: "Пароль не должен содержать пробелы!" },
                    { min: 3, message: "Пароль должен содержать не менее 3 символов!" },
                ]}
            >
                <Input.Password
                    type="password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                <FormButton
                    value={ userRegStatus ? "Вход" : "Регистрация" }
                    onClick={ form.submit }
                    disabled={
                        !form.isFieldsTouched(true) || form.getFieldsError()
                            .filter(({ errors }) => errors.length).length > 0
                    }
                />
            </Form.Item>
            <h4>{ errorMessage }</h4>
        </Form>
    )
}

export default LoginForm;