/**
  The `<Container/>` component...
**/


import styled from 'styled-components';

export default styled.div`

  ${'' /* margin: 0 auto;
  max-width: 1280px;
  width: 90%;

  @media ${props => props.theme.mediumOnly}
  {
    width: 85%;
  }

  @media ${props => props.theme.largeAndUp}
  {
    width: 70%;
  } */}
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
  @media only screen and (min-width: 993px)
  {
      width: 85%;
  }
  @media only screen and (min-width: 993px)
  {
      width: 70%;
  }
  @media only screen and (min-width: 601px)
  {
      width: 85%;
  }
`;
