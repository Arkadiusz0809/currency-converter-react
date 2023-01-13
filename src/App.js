import React, { useState } from 'react';
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Select from "./Select";




function App() {
  const [result, setResult] = useState(0);
  const currencies = [
    { id:1, label: "EUR" },
    { id:2, label: "GBP" },
    { id:3, label: "USD" },
    { id:4, label: "PLN" }
  ];

  const convertAmountInputCurrency = (currencies) => {

    


  return (
    <Container>
      <Section
        body={
          <><Form />
          <Select /></> 
        }
      />
      <Section
        body={
          <Tasks
          />
        }
      />
    </Container>
  );
}
}

export default App;
