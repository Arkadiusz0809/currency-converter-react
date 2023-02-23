import { currencies } from "../currencies";
import { Result } from "./Result";
import { FormStyled, Legend, LabelText, PrimeText, SelectStyled, Button } from "./styled";
import { useState } from "react";


const Form = () => {
    const [amount, setAmount] = useState("");
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short);
    const [currencyTo, setCurrencyTo] = useState(currencies[1].short);
    const [result, setResult] = useState("");

    const findCurrency = (currencyName) => currencies.find(({ short }) => short === currencyName);
    const calculateResult = () => {
        setResult({
            currencyFrom,
            currencyTo,
            targetAmount: (findCurrency(currencyFrom).rate * amount) / findCurrency(currencyTo).rate,
            sourceAmount: +amount,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    }

    return (
        <FormStyled onSubmit={onSubmit}>
            <fieldset>
                <Legend>Currency converter</Legend>
                <PrimeText>
                    Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                </PrimeText>
                <p>
                    <label>
                        <LabelText>How much ?</LabelText>
                        <input
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
                            value={currencyFrom}
                            name="currencyFrom"
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                        >
                            {currencies.map((currencyFrom => (
                                <option key={currencyFrom.short} value={currencyFrom.short}>
                                    {currencyFrom.short}
                                </option>
                            )))}
                        </SelectStyled>
                    </label>
                </p>
                <p>
                    <label>
                        <LabelText>Output currency:</LabelText>
                        <SelectStyled
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}>
                            {currencies.map(currencyTo => (
                                <option key={currencyTo.short} value={currencyTo.short}>
                                    {currencyTo.short}
                                </option>
                            ))};
                        </SelectStyled>
                    </label>
                </p>

                <Button>Calculate</Button>
            </fieldset>

            <Result result={result} />
        </FormStyled>
    );
};


export  { Form };
