/**
  The `<Footer/>` component...
**/

import styled from 'styled-components';

export default styled.footer`
  background-color: ${props => props.theme.color.black};
  color: ${props => props.theme.color.white};

  padding: 20px;
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items
                     shrink to smaller than their content's default minimum
                     size.
                  */
`;
