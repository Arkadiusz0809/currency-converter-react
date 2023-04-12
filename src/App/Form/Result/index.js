import { ResultStyled } from "./styled";

export const Result = ({ result }) => (
    <ResultStyled>
        {!!result && (
            <>
                <strong>
                    {result.sourceAmount.toFixed(2)}&nbsp; {result.currencyFrom} =
                    {" "}
                    {(result.targetAmount).toFixed(2)}&nbsp; {result.currencyTo}
                </strong>
            </>
        )}
    </ResultStyled>
);

