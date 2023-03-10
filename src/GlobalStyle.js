import { createGlobalStyle } from "styled-components";
import money from "./money.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-position: center;  
  background-image: url("${money}");
}
`;

