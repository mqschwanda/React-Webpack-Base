/**
  The `<Footer/>` component...
**/

import styled from 'styled-components';

export default styled.footer`
  color: ${props => props.theme.footerColor};
  background-color: ${props => props.theme.footerBgColor};
  box-shadow: ${props => props.theme.componentShadow};
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items
                     shrink to smaller than their content's default minimum
                     size.
                  */
`;
