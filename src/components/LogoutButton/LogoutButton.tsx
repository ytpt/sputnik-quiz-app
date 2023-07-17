import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleErrorMessage, handleSetUser, handleTimerActive, handleUserAuth } from "../../redux/actions";
import { Button } from "antd";
import AuthService from "../../services/AuthService";
import { IUser } from "../../models/response/IUser";
import { RootState } from "../../redux/store";

type Props = {
    value: string;
}

const LogoutButton: FC<Props> = ({
  value,
}) => {

    const dispatch = useDispatch();
    const isUserAuth = useSelector((state: RootState) => state.userStatus.user_auth);
    const errorMessage = useSelector((state: RootState) => state.errorMessage.error_message);


    const logout = async function() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            localStorage.removeItem("login");
            dispatch(handleUserAuth(false));
            dispatch(handleSetUser({} as IUser));
            dispatch(handleTimerActive(false));
            dispatch(handleErrorMessage(""));
        } catch(e) {
            dispatch(handleErrorMessage("Что-то пошло не так!"));
        }
    }

    return (
        <>
            <Button onClick={ logout }>
                { value }
            </Button>
            { isUserAuth && <div>{ errorMessage }</div> }
        </>
    )
}

export default LogoutButton;