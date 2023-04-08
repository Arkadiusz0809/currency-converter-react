import { ResultStyled } from "./styled";

export const Result = ({ result }) => (
    <ResultStyled>
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp; {result.currencyFrom} =
                {" "}
                <strong>
                    {(result.targetAmount).toFixed(2)}&nbsp; {result.currencyTo}
                </strong>
            </>
        )}
    </ResultStyled>
);

