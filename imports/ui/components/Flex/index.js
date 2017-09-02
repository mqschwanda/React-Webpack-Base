/**
  The `<Flex/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.div.attrs({
  className: isDev ? 'flex' : '',
})`

`;
