/**
  The `<LegalLink/>` component...
**/

import styled from 'styled-components';
import { isDev } from 'helpers';

export default styled.a.attrs({
  className: isDev ? 'a' : '',
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
