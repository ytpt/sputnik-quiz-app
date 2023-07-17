import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const root = createRoot(document.getElementById("root"));

root.render(
    <Provider store={ store }>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> } />
                <Route path="*" element={ <NotFoundPage /> } />
            </Routes>
        </BrowserRouter>
    </Provider>
);