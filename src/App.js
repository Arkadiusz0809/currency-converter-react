import React, { useState } from 'react';
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";



function App() {
  const [hideDone, setHideDone] = useState(false);
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    { value: 4.86, label: 'EUR' },
    { value: 5.52, label: 'GBP' },
    { value: 4.95, label: 'USD' },
    { value: 1, label: 'PLN' }
  ]
  );

  const setSelect = () => {



  }


  return (
    <Container>
      <Section
        body={
          <Form />}
      />
      <Section
        body={
          <Tasks
            setSelect={setSelect}
          />
        }
      />
    </Container>
  );
}


export default App;
