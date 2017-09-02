/**
  The `<Card/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.div.attrs({
  className: isDev ? 'card' : '',
})`
  position: relative;
  margin: ${props => props.theme.componentMargin};
  padding: ${props => props.theme.componentPadding};
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow};
`;
