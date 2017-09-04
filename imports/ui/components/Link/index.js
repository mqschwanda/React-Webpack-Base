/**
  The `<Link/>` component...
**/

import styled from 'styled-components';

const Link = styled.a.attrs({
  target: props => (props.blank ? '_blank' : ''),
  href: props => props.href || '#',
})`
  color: inherit;
  text-decoration: none;

  &:hover
  {
    opacity: 0.85;
  }
`;
export default Link;
