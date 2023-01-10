import React, { useState } from 'react';
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";


function App() {





  return (
    <Container>
      <Section
        title="Currency Converter"
        body={<Form />}
      />
      <Section />
    </Container>
  );
}


export default App;
