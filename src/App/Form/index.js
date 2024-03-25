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
    Label,
} from "./styled";

import { useCurrencies } from "./useRatesData";


export const Form = () => {
    const [newAmount, setNewAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState("EUR");
    const [currencyTo, setCurrencyTo] = useState("PLN");
    const [result, setResult] = useState();

    const { rates, state, date } = useCurrencies();

    const calculateResult = (currencyFrom, currencyTo, newAmount) => {
        const inputRate = rates[currencyFrom].value;
        const outputRate = rates[currencyTo].value;


        setResult({
            currencyFrom,
            currencyTo,
            targetAmount: (inputRate * newAmount) / outputRate,
            sourceAmount: +newAmount,
            date: new Date(date).toLocaleDateString("pl-PL"),
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currencyFrom, currencyTo, newAmount);
    }

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <Legend>Currency converter</Legend>
            {state === "loading"
                ? (
                    <Loading>
                        Second... <br />Creating connection with European Central Bank
                    </Loading>
                )

                : (
                    state === "error" ? (
                        <Failure>
                            Ooops... Something's gone wrong 🤔 You check, your intenet connecting
                        </Failure>
                    ) : (
                        <>
                            <PrimeText>
                                Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                            </PrimeText>
                            <p>
                                <Label>
                                    <LabelText>How much ?</LabelText>
                                    <Field
                                        value={newAmount}
                                        onChange={({ target }) => setNewAmount(target.value)}
                                        type="number"
                                        step="0.01"
                                        required
                                        autoFocus />
                                </Label>
                            </p>
                            <p>
                                <Label>
                                    <LabelText>Your currency: </LabelText>
                                    <SelectStyled
                                        as="select"
                                        value={currencyFrom}
                                        onChange={({ target }) => setCurrencyFrom(target.value)}
                                    >
                                        {Object.keys(rates).map(((currencyFrom) => (
                                            <option
                                                key={currencyFrom}
                                                value={currencyFrom}
                                            >
                                                {currencyFrom}
                                            </option>
                                        )))}
                                    </SelectStyled>
                                </Label>
                            </p>
                            <p>
                                <Label>
                                    <LabelText>Output currency:</LabelText>
                                    <SelectStyled
                                        as="select"
                                        value={currencyTo}
                                        onChange={({ target }) => setCurrencyTo(target.value)}
                                    >
                                        {Object.keys(rates).map(((currencyTo) => (
                                            <option
                                                key={currencyTo}
                                                value={currencyTo}
                                            >
                                                {currencyTo}
                                            </option>
                                        )))}
                                    </SelectStyled>
                                </Label>
                            </p>
                            <p>
                                <Button>Calculate</Button>
                            </p>
                            <Info>
                            Exchange rates are charged from the European Central Bank<br /> Current as of the date <strong> 25.03.2024 </strong>
                            </Info>
                            <Result result={result} />


                        </>

                    )

                )}

        </FormStyled>
    );

};

