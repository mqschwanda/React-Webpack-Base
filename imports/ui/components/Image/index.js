/**
  The `<Image/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.img.attrs({
  className: isDev ? 'img' : '',
})`
  ${props => (props.fullWidth ? 'width: 100%' : '')}

`;
