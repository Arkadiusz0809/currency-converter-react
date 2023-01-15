import { currencies } from "../currencies";
import { Result } from "/.Result";
import "./style.css";
import { useState } from "react";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
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
                            required />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Your currency: </span>
                        <select 
                        className="form__select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        >
                           {currencies.map((currency => (
                            <option
                            key={currency.short}
                            value={currency.short}
                            >
                                {currency.name}
                            </option>
                           )))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Target currency: </span>
                        <select className="form__select">
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="USD">USD</option>
                            <option value="PLN">PLN</option>
                        </select>
                    </label>
                </p>
                <button className="form__button">Calculate</button>
            </fieldset>

            <Result result={result} />
        </form>
    );
};



