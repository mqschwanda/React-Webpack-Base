/**
  The `<Image/>` component...
**/

import styled from 'styled-components';

export default styled.img`
  ${props => (props.fullWidth ? 'width: 100%' : '')}

`;
