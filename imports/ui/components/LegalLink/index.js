/**
  The `<LegalLink/>` component...
**/

import styled from 'styled-components';

export default styled.a.attrs({
  target: '_blank',
  href: props => props.href || '#',
})`
  font-family: Copyright;
  font-size: 12px;
  opacity: 0.75;
  text-decoration: underline;
  color: black;
`;
