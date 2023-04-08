import { Result } from "./Result";
import { useState } from "react";
import {
    Field,
    FormStyled,
    Legend,
    LabelText,
    PrimeText,
    SelectStyled,
    Button,
    Loading,
    Failure,
    Info,
} from "./styled";

import { useRatesData } from ".useRatesDate";


export const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            currency,
            targetAmount: rate * amount / rate,
            sourceAmount: +amount,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <fieldset />
                <Legend>Currency converter</Legend>
                <PrimeText>
                    Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                </PrimeText>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Second... <br />Creating connection with European Central Bank
                        </Loading>
                    )

                    : (
                        ratesData.state === "error" ? (
                            <Failure>
                                Ooops... Something's gone wrong 🤔 You check, your intenet connecting
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <LabelText>How much ?</LabelText>
                                        <Field
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            type="number"
                                            step="0.01"
                                            required
                                            autoFocus />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>Your currency: </LabelText>
                                        <SelectStyled
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </SelectStyled>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <LabelText>Output currency:</LabelText>
                                        <SelectStyled
                                        as="select"
                                        value={currency}
                                        onChange={({ target }) => setCurrency(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currency) => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </SelectStyled>
                                    </label>
                                </p>
                                <p>
                                    <Button>Calculate</Button>
                                </p>
                                <Info>
                                    Rates has been downloaded from website nbp.pl
                                </Info>
                                

                                <Result result={result} />

                            </>
                        )
                    )}
        </FormStyled>
    );
};


