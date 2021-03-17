import { createGlobalStyle, css } from 'styled-components'

import { generateMedia } from 'styled-media-query'

export const media = generateMedia({
  tablet: '1050px',
  mobile: '640px'
})

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }


  ${({ theme }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    label {
      font-family: ${theme.font.family};
    }

    a,
    a:hover,
    a:focus,
    a:active {
      text-decoration: none;
      color: inherit;
    }

    ul {
      list-style: none;
    }

    html {
      font-size: 62.5%;
    }

    input,
    select,
    textarea,
    button {
      font-family: inherit;
    }
    body {
      color: ${theme.colors.heading};
      font-family: ${theme.font.family2};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
