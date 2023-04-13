import { ResultStyled } from "./styled";

export const Result = ({ result }) =>
    !!result && (
        <ResultStyled>
            {result.sourceAmount.toFixed(2)}&nbsp; {result.currencyFrom} ={" "}
            {result.targetAmount.toFixed(2)}&nbsp; {result.currencyTo}
        </ResultStyled>
    );

