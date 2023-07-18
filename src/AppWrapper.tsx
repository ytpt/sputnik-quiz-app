import React, { FC } from "react";
import "antd/dist/reset.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import App  from "./components/App/App";

export const AppWrapper: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={ store }>
                <Routes>
                    <Route path="/" element={ <App /> } />
                    <Route path="*" element={ <NotFoundPage /> } />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
};