import { createGlobalStyle } from 'styled-components'

export const colors = {
  color1: '#bee9e8',
  color2: '#62b6cb',
  color3: '#1b4965',
  color4: '#cae9ff',
  color5: '#5fa8d3'
}

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);
    overflow: hidden;
  }
`

export default GlobalStyles
