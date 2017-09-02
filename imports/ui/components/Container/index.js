/**
  The `<Container/>` component...
**/


import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.div.attrs({
  className: isDev ? 'container' : '',
})`
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;

  @media ${props => props.theme.mediumOnly}
  {
    width: 85%;
  }

  @media ${props => props.theme.largeAndUp}
  {
    width: 70%;
  }
`;
