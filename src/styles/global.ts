import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :focus {
        outline: 1px solid ${(props) => props.theme.green2};
    }

    body {
        background: ${(props) => props.theme.secundary};
        color: ${(props) => props.theme.gray2};
    }

    body, input, textarea, button, a {
        font: 400 1rem 'Roboto', sans-serif;
        color: ${(props) => props.theme.gray1};
    }

    .flexReset {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`
