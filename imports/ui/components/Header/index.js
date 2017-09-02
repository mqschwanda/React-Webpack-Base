/**
  The `<Header/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.header.attrs({
  className: isDev ? 'header' : '',
})`
  height: ${props => props.theme.headerHeight};
  line-height: ${props => props.theme.headerLineHeight};
  font-size: ${props => props.theme.headerFontSize};
  color: ${props => props.theme.headerColor};
  background-color: ${props => props.theme.headerBgColor};
  box-shadow: ${props => props.theme.componentShadow};

  @media ${props => props.theme.smallAndDown}
  {
    height: ${props => props.theme.headerHeightMobile};
    line-height: ${props => props.theme.headerLineHeightMobile};
  }
`;
