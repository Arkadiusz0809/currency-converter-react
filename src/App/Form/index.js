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

import { useRatesData } from "./useRatesData";


export const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("EUR");
    const [currencyTo, setCurrencyTo] = useState("USD");
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currencyFrom, currencyTo, amount) => {
        const inputRate = ratesData.rates[currencyFrom];
        const outputRate = ratesData.rates[currencyTo];


        setResult({
            currencyFrom,
            currencyTo,
            targetAmount: inputRate * amount / outputRate,
            sourceAmount: +amount,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currencyTo, currencyFrom, amount);
    }

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Legend>Currency converter</Legend>
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
                            <PrimeText>
                                Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                            </PrimeText>
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
                                        value={currencyFrom}
                                        onChange={({ target }) => setCurrencyFrom(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currencyFrom) => (
                                            <option
                                                key={currencyFrom}
                                                value={currencyFrom}
                                            >
                                                {currencyFrom}
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
                                        value={currencyTo.rate}
                                        onChange={({ target }) => setCurrencyTo(target.value)}
                                    >
                                        {Object.keys(ratesData.rates).map(((currencyTo) => (
                                            <option
                                                key={currencyTo}
                                                value={currencyTo}
                                            >
                                                {currencyTo}
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

