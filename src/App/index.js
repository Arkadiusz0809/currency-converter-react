import { useState } from "react";
import { AppStyled } from "./styled";
import { Form } from './Form';
import { currencies } from "./currencies";
import { Clock } from "./Clock";



function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;


        setResult({
            sourceAmount: + amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <AppStyled className="app">
            <Clock />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </AppStyled>
    );
}

export default App;