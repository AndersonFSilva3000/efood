import { createGlobalStyle } from 'styled-components'

export const Colors = {
  background: '#FFF8F2',
  lightOrange: '#FFEBD9',
  darkOrange: '#E66767',
  white: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Colors.background};
    color: ${Colors.darkOrange};
  }

  .container {
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
  }
`
