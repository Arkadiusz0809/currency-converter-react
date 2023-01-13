import "./style.css";
import React, { useState } from 'react';



const Form = (newAmount) => {

    const onFormSubmit = (event) => {
        event.preventDefault();

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
                        value={newAmount}
                        className=" form__input" 
                        placeholder="How much?"
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