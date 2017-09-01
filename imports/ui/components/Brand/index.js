/**
  The `<Brand/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  height: ${props => props.theme.brandHeight};
  line-height: ${props => props.theme.brandLineHeight};
  font-size: ${props => props.theme.brandFontSize};
  font-family: ${props => props.theme.headerFontFamily};
  color: ${props => props.theme.brandColor};
  background-color: ${props => props.theme.brandBgColor};

  @media ${props => props.theme.smallAndDown}
  {
    height: ${props => props.theme.brandHeightMobile};
    line-height: ${props => props.theme.brandLineHeightMobile};
  }
`;
