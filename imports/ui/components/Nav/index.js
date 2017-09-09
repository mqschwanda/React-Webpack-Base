/**
  The `<Nav/>` component...
**/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import { Link } from 'components';

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
  line-height: 40px;
  padding: 12px 0;
  @media ${props => props.theme.smallAndDown}
  {
    height: ${props => props.theme.headerHeightMobile};
    padding: 8px 0;
    box-sizing: border-box;
  }
`;

export const NavListItem = styled.li`
  list-style-type: none;
  -webkit-transition: background-color .3s;
  transition: background-color .3s;
  float: left;
  padding: 0;
`;

const NavLinkText = styled.span`
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

  ${props => (props.isActive ? `background-color: ${props.theme.navLinkBgHover};` : '')}
  &:hover
  {
    background-color: ${props => props.theme.navLinkBgHover};
    outline: 0;
  }
`;

@connect(store => ({ router: store.router }))
export class NavLink extends PureComponent {
  static propTypes = { pathTo: PropTypes.string, router: PropTypes.object }
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleIsActive = this.handleIsActive.bind(this);
  }
  componentDidMount() { this.setState({ isActive: this.handleIsActive() }); }
  componentDidUpdate() { this.setState({ isActive: this.handleIsActive() }); }
  handleIsActive() {
    return this.props.pathTo === this.props.router.location.pathname;
  }
  render() {
    return (
      <Link pathTo={this.props.pathTo}>
        <NavLinkText {...this.props} isActive={this.state.isActive}/>
      </Link>
    );
  }
}

const Brand = styled.span`
  position: absolute;
  color: ${props => props.theme.secondaryColor};
  font-size: ${props => props.theme.brandFontSize};
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  text-decoration: none;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  padding: 0;
  &:active,
  &:hover
  {
    outline: 0;
  }
`;

export class BrandLink extends PureComponent {
  static propTypes = { pathTo: PropTypes.string }
  render() {
    return (
      <Link pathTo={this.props.pathTo}>
        <Brand {...this.props} />
      </Link>
    );
  }
}
