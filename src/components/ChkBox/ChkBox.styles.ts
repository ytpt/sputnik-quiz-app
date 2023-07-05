import styled from "styled-components";

export const Wrapper = styled.div` 
    label {
        display: flex; 
        flex-direction: row;
        align-items: center;
        column-gap: 5px;
    }
    
    input {
        cursor: pointer;
        user-select: none;
        width: 25px;
        height: 25px;
        border: 3px solid #fff;
    }
    
    p {
        margin: 0;
    }
`;