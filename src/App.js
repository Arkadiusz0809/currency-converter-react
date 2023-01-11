import React, { useState } from 'react';
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";



function App() {
  const [result, setResult] = useState(0);
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    { value: 4.86, label: "EUR" },
    { value: 5.52, label: "GBP" },
    { value: 4.95, label: "USD" },
    { value: 1, label: "PLN" }
  ]
  );


  return (
    <Container>
      <Section
        body={
          <Form />}
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


export default App;
