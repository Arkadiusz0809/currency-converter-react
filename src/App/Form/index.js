import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";
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
        <form className="form" onSubmit={onSubmit}>
            <fieldset>
                <legend className="form__legend">Currency converter</legend>
                <p className="form__instruction">
                    Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                </p>
                <p>
                    <label>
                        <span className="form__labelText ">How much ?</span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            className="form__input"
                            type="number"
                            step="0.01"
                            required
                            autoFocus />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Your currency: </span>
                        <select
                            className="form__select"
                            value={currencyFrom}
                            name="currencyFrom"
                            onChange={({ target }) => setCurrencyFrom(target.value)}
                        >
                            {currencies.map((currencyFrom => (
                                <option key={currencyFrom.short} value={currencyFrom.short}>
                                    {currencyFrom.short}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Output currency:</span>
                        <select
                            className="form__select"
                            name="currencyTo"
                            value={currencyTo}
                            onChange={({ target }) => setCurrencyTo(target.value)}>
                            {currencies.map(currencyTo => (
                                <option key={currencyTo.short} value={currencyTo.short}>
                                    {currencyTo.short}
                                </option>
                            ))};
                        </select>
                    </label>
                </p>

                <button className="form__button">Calculate</button>
            </fieldset>

            <Result result={result} />
        </form>
    );
};


export  { Form };
