/**
  The `<App/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.div.attrs({
  className: isDev ? 'app' : '',
})`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Avoid the IE 10-11 \`min-height\` bug. */
`;
