import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Raleway", sans-serif;
    background-color: #f3a683;
  }

  ul{
    list-style: none;
  }  

  button, input{
    font-family: "Raleway", sans-serif;
    border: none;
    border-radius: .5rem;
    outline: none;
  }
`

export default EstiloGlobal