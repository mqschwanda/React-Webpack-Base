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
`;

export const showClassName = process.env.NODE_ENV === 'development';
