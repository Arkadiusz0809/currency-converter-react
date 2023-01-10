import "./style.css";


const Form = () => { 


    return (
        <form className="form ">
                    <fieldset>
                        <legend className="form__legend">Currency converter</legend>
                        <p className="form__instruction">
                            Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                        </p>
                        <p>
                            <label>
                                <span className="form__labelText ">How much ?</span>
                            <input className=" form__input" type="number" name="amount" step="0.01" min="0" required />
                            </label>
                        </p>
                        <p>
                            <label>
                                <span className="form__labelText">Your currency: </span>
                                <select className="form__select ">
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="USD">USD</option>
                                    <option value="PLN">PLN</option>
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
                                    <option value="PLN" selected>PLN</option>
                                </select>
                            </label>
                        </p>
                        <button className="form__button">Calculate</button>
                    </fieldset>
                </form>
        ) 
}

export default Form;