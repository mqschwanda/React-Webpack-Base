/**
  The `<Col/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

const reverse = props => (props.reverse ? 'flex-direction: column-reverse;' : '');

export default styled.div.attrs({
  className: isDev ? 'Col' : '',
})`
  box-sizing: border-box;

  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;

  max-width: 100%;
  padding-right: 0.5rem;
  padding-left: 0.5rem;

  ${reverse}
`;
