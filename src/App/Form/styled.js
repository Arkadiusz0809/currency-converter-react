import styled from "styled-components";

export const FormStyled = styled.form`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    max-width: 650px;
    width: 100%;
    border-radius: 5px;
    margin: 0 auto;
    background-color: beige;
`;

export const Legend = styled.legend`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.orange};
    padding: 7px;
    border-radius: 3px;
    text-align: left;
    margin: 5px;
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 10px;
    width: 100%;
    max-width: px;
    border-radius: 5px;
    display: inline-block;

`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 250px;
    display: inline-block;
    margin-right: 5px;
`;

export const PrimeText = styled.p`
    text-align: center;
    border-bottom:1px solid ${({ theme }) => theme.color.crimson} ;
    max-width: 470px;
    margin: auto;
`;

export const Info = styled.p`
   font-size: small;
    text-align: center;
    margin: auto;
    color: ${({ theme }) => theme.color.emperor};
`;

export const SelectStyled = styled.select`
    border: 1px solid ${({ theme }) => theme.color.silver};
    padding: 5px;
    max-width: 200px;
    width: 100%;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.orange};
    color: white;

    &:hover{
        filter: brightness(110%);;
        color: white;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.teal};
    border-style: none;
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    margin: 5px;
    transition: 0.3s;

    &:hover{
        filter: brightness(110%);
    }
`; 

export const Loading = styled.p`
    color: ${({theme}) => theme.color.teal};
`;

export const Failure = styled.p`
    color: ${({theme}) => theme.color.crimson};
`;