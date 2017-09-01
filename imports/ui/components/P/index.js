/**
  The `<P/>` component...
**/

import styled from 'styled-components';

export default styled.p`
  font-family: ${props => props.theme.paragraphFontFamily};
  color: ${props => props.theme.paragraphFontColor};
`;
