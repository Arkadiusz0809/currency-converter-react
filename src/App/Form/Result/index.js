import { ResultStyled } from "./styled";

export const Result = ({ result }) => {
    if (result !== "")
    return (
        <p>
            <ResultStyled className="result">
                {result.sourceAmount} {result.currencyFrom} = {(result.targetAmount).toFixed(2)} {result.currencyTo}
            </ResultStyled>
        </p>
    )
};
