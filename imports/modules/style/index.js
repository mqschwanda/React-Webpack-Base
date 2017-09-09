import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from './theme';

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export const InjectGlobalStyle = injectGlobal`
  #app
  {
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;
  }

  *
  {
    font-family: Roboto;
  }

  #sidenav-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 120vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 997;
    will-change: opacity;
  }
  @media only screen and (max-width: 992px)
  {
    header, main, footer {
        padding-left: 0 !important;
    }
  }
  header, main, footer {
      padding-left: 300px;
  }
`;

export { default as normalize } from 'normalize.css/normalize.css';
