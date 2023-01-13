import "./style.css";



const Select = () => {


    return (
        <><p>
            <label>
                <span className="form__labelText">Your currency: </span>
                <select className="form__select ">
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="PLN">PLN</option>
                </select>
            </label>
        </p><p>
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
            <button className="form__button">Calculate
                </button>
                </>

    )

}






export default Select;