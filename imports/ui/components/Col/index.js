/**
  The `<Col/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  max-width: 100%;

  ${props => (props.reverse ? `
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  ` : '')}
`;
