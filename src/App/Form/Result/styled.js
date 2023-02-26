import styled from "styled-components";

export const ResultStyled = styled.strong`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    max-width: 400px;
    margin:0 auto;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
`;

