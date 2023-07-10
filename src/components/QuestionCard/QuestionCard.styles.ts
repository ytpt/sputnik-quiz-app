import styled from "styled-components";

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const Wrapper = styled.div`
    width: 800px;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    width: max-content;
    display: flex; 
    justify-content: space-between;
    flex-direction: row;
    column-gap: 5px;
    transition: all 0.3s ease;
`;