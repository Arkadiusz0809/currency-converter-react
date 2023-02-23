import styled from "styled-components";

export const FormStyled = styled.form`
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 650px;
    width: 100%;
    border-radius: 5px;
    margin: 0 auto;
    background-color: beige;
`;

export const Legend = styled.legend`
    color: white;
    background-color: hsl(39, 86%, 58%);
    padding: 7px;
    border-radius: 3px;
    text-align: left;
    margin: 5px;
`;

export const LabelText = styled.span`
    width: 250px;
    max-width: 100%;
    display: inline-block;
    margin-right: 5px;
`;

export const PrimeText = styled.p`
    text-align: center;
    border-bottom:1px solid red ;
    max-width: 470px;
    margin: auto;
`;

export const SelectStyled = styled.select`
    border: 1px solid #ccc;
    padding: 5px;
    max-width: 200px;
    width: 100%;
    border-radius: 5px;
    background-color: hsl(39, 100%, 45%);
    color: white;

    &:hover{
        background-color: hsl(39, 100%, 50%);
        color: white;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: hsl(180, 100%, 25%);
    border-style: none;
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;

    &:hover{
            background-color:  hsl(180, 100%, 30%);
    }
`; 
