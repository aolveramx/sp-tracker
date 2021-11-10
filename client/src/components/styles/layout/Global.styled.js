import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Roboto:wght@300;400;500;700&display=swap');

  * {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  background-color: #000;
  }
`

export default GlobalStyles