/**
  The `<H/>` component...
**/

import styled from 'styled-components';

const headerBase = props => `
font-family: ${props.theme.headerFontFamily};
color: ${props.theme.headerFontColor};
`;

export const H1 = styled.h1`
  ${headerBase};
  font-size: ${props => props.theme.h1FontSize};
`;

export const H2 = styled.h2`
  ${headerBase};
  font-size: ${props => props.theme.h2FontSize};
`;

export const H3 = styled.h3`
  ${headerBase};
  font-size: ${props => props.theme.h3FontSize};
`;

export const H4 = styled.h4`
  ${headerBase};
  font-size: ${props => props.theme.h4FontSize};
`;

export const H5 = styled.h5`
  ${headerBase};
  font-size: ${props => props.theme.h5FontSize};
`;

export const H6 = styled.h6`
  ${headerBase};
  font-size: ${props => props.theme.h6FontSize};
`;
