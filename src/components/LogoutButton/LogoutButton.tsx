import React from "react";
import { useDispatch } from "react-redux";
import { handleSetUser, handleUserAuth } from "../../redux/actions";
import { Button } from "antd";
import AuthService from "../../services/AuthService";
import { IUser } from "../../models/response/IUser";

type Props = {
    value: string;
}

const LogoutButton: React.FC<Props> = ({
  value,
}) => {

    const dispatch = useDispatch();
    const logout = async function() {
        try {
            const response = await AuthService.logout();
            console.log(response);
            localStorage.removeItem("token");
            localStorage.removeItem("login");
            dispatch(handleUserAuth(false));
            dispatch(handleSetUser({} as IUser));
        } catch(e) {
            console.log(e.response?.data?.message);
        }
    }

    return (
        <>
            <Button onClick={ logout }>
                { value }
            </Button>
        </>
    )
}

export default LogoutButton;