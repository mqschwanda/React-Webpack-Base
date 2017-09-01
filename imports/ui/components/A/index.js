/**
  The `<LegalLink/>` component...
**/

import styled from 'styled-components';

export default styled.a.attrs({
  target: '_blank',
  href: props => props.href || '#',
})`
  color: inherit;
  text-decoration: none;

  &:hover
  {
    opacity: 0.85;
  }
`;
