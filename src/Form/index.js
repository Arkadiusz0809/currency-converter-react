import "./style.css";
import React, { useState } from 'react';



const Form = (addNewAmount) => {
    const [newAmountContent, setNewAmountContent] = useState("");


    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewAmount(newAmountContent.trim());
        setNewAmountContent("");
    };


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset>
                <legend className="form__legend">Currency converter</legend>
                <p className="form__instruction">
                    Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
                </p>
                <p>
                    <label>
                        <span className="form__labelText ">How much ?</span>
                        <input 
                        className=" form__input" 
                        placeholder="How much?"
                        onChange={({ target }) => setNewAmountContent(target.value)}
                        type="number" 
                        name="amount" 
                        step="0.01" 
                        min="0" 
                        required />
                    </label>
                </p>
            </fieldset>
        </form>
    )
}

export default Form;