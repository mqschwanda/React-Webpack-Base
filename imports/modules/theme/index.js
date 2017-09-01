import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';

const mediaQuery = {
  xxs: '480',
  xs: '600',
  sm: '840',
  md: '960',
  lg: '1280',
  xl: '1440',
  xxl: '1600',
};

const color = {
  black: '#000000',
  white: '#FFFFFF',
};

const theme = {
  mediaQuery,
  color,
};

export const ThemeWrap = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

export const InjectStyle = injectGlobal`
  #app
  {
    width: 100%;
    height: 100%;
    width: 100vw;
    height: 100vh;
  }
`;
