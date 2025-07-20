import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --col-main: #171717;
        --col-main-tint: #2c2c2c;
        --col-text: #7d7d7d;
        --col-text-highlight: #aeaeae;
        --col-link: #3C3C3C;

        --font-regular: 14px;
        --font-small: 12px;
        --border-bottom: 1px solid var(--col-link);
        --transition: all .2s ease;

        font-family: Inter, system-ui, sans-serif;
        font-size: var(--font-regular);
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        background-color: var(--col-main);
        color: var(--col-text);

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *::selection {
        background: var(--col-main-tint);
        color: var(--col-text-highlight);
    }

    body {
        min-width: 320px;
        min-height: 100vh;
        padding: 6rem 1rem 1rem 1rem;

        &::-webkit-scrollbar {
            width: .3rem;
        }
        &::-webkit-scrollbar-track {
            background: var(--col-main);
        }
        &::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, var(--col-main), var(--col-link), var(--col-main));
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font: inherit;
    }
`;

export default GlobalStyles;
