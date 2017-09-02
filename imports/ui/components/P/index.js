/**
  The `<P/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.p.attrs({
  className: isDev ? 'p' : '',
})`
  font-family: ${props => props.theme.paragraphFontFamily};
  color: ${props => props.theme.paragraphFontColor};
`;
