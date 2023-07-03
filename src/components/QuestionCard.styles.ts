import styled from "styled-components";

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const Wrapper = styled.div`
    max-width: 1100px;    
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    display: flex;
    
    :hover {
        opacity: 0.8;
    }
    
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 50%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
            correct
                ? "liner-gradient(90deg, #56ffa4, #59bc86)"
                : !correct && userClicked
                    ? "liner-gradient(90deg, #ff5656, #c16868)"
                    : "liner-gradient(90deg, blue, aqua)"
        }
        border: 3px solid #fff;
        border-radius: 10px;
    }
`;