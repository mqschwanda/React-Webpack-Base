/**
  The `<Row/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

const reverse = props => (props.reverse ? 'flex-direction: row-reverse;' : '');

export default styled.div.attrs({
  className: isDev ? 'row' : '',
})`
  box-sizing: border-box;

  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;

  margin-right: -0.5rem;
  margin-left: -0.5rem;

  ${reverse}
`;
