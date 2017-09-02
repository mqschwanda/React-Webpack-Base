/**
  The `<Main/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.main.attrs({
  className: isDev ? 'main' : '',
})`
  flex: 1 0 auto; /* Prevent Chrome, Opera, and Safari from letting these items
                     shrink to smaller than their content's default minimum
                     size.
                  */
`;
