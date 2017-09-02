/**
  The `<Card/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.div.attrs({
  className: isDev ? 'card' : '',
})`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow};
`;
