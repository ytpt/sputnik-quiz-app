import styled, { createGlobalStyle} from "styled-components";
import BGImage from "./assets/flags.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Arial", sans-serif;
        text-align: center;
    }
    
    html {
        height: 100%;
    }
    
    body {
        background-image: url(${ BGImage });
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        color: white;
        height: 100%;
    }
    
    button {
        cursor: pointer;
        padding: 5px 10px;
        margin-top: 5px;
        border-radius: 10%;
        border: none;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5272af;
    padding: 10px;
    vertical-align: middle;
    border-radius: 14%;
    
    .score {
        font-size: 2rem;
        margin: 0;
    }
    
    h1 {
        font-size: 3rem;
    }
`