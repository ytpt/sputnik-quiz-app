import styled, { createGlobalStyle } from "styled-components";
import BGImage from "../../assets/flags.jpg";

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
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10vh auto;
    
    h1 {
        color: red;
    }
`;