/**
  The `<Header/>` component...
**/

import styled from 'styled-components';

export default styled.header`
  height: ${props => props.theme.headerHeight};
  line-height: ${props => props.theme.headerLineHeight};
  font-size: ${props => props.theme.headerFontSize};
  color: ${props => props.theme.headerFontColor};
  background-color: ${props => props.theme.headerBgColor};

  /*
    height: ${props => props.theme.headerHeightMobile};
    line-height: ${props => props.theme.headerLineHeightMobile};
    font-size: ${props => props.theme.headerBrandFontSize};
  */

`;
