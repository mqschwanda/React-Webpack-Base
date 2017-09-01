/**
  The `<Footer/>` component...
**/

import styled from 'styled-components';

export default styled.footer`
  color: ${props => props.theme.footerFontColor};
  background-color: ${props => props.theme.footerBgColor};


  /*
    color: ${props => props.theme.footerCopyrightFontColor};
    background-color: ${props => props.theme.footerCopyrightBgColor};
  */

  padding: 20px;
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items
                     shrink to smaller than their content's default minimum
                     size.
                  */
`;
