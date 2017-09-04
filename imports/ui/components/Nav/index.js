/**
  The `<Nav/>` component...
**/

import styled from 'styled-components';
// import { Link } from 'components';

export const Nav = styled.nav`
  ${'' /* position: relative;
  box-sizing: border-box;
  margin: ${props => props.theme.componentMargin};
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow}; */}
`;

export const NavWrapper = styled.div`
  position: relative;
  height: 100%;
  @media ${props => props.theme.smallAndDown}
  {
    ${'' /* nav.nav-extended .nav-wrapper {
      min-height: 64px;
    } */}
    ${'' /* nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
      height: 64px;
      line-height: 64px;
    } */}
    ${'' /* .navbar-fixed {
      height: 64px;
    } */}
  }
`;

export const NavList = styled.ul`
  margin: 0;
  float: right !important;
  padding-left: 0;
  list-style-type: none;
`;

export const NavListItem = styled.li`
  list-style-type: none;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
  float: left;
  padding: 0;
`;

export const NavLink = styled.a`
    display: block;
    font-size: 1rem;
    padding: 0 15px;
    cursor: pointer;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    transition: background-color .3s;
    color: ${props => props.theme.secondaryColor};

  &:hover
  {
    background-color: rgba(0,0,0,0.1);
  }
`;

export const BrandLink = styled.a`
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
  &:active,
  &:hover
  {
    outline: 0;
  }
  /* a { */
    -webkit-font-smoothing: antialiased;
    text-decoration: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
  /* } */
`;
