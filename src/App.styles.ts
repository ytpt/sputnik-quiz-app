import styled, { createGlobalStyle } from "styled-components";
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
        color: white;
    }
`;

export const Wrapper = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5272af;
    padding: 10px;
    vertical-align: middle;
    border-radius: 40px;
    margin: 0 auto;
    border: 1px solid white;
    
    .score {
        font-size: 2rem;
        margin: 0;
    }
    
    h1 {
        font-size: 3rem;
    }
`