/**
  The `<Nav/>` component...
**/

// import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
// import { Link } from 'components';

export const SideNav = styled.ul`
  position: fixed;
  width: 300px;
  left: 0;
  top: 0;
  margin: 0;
  transform: translateX(-100%);
  height: 100%;
  height: calc(100% + 60px);
  height: -moz-calc(100%);
  padding-bottom: 60px;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateX(-105%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  padding-left: 0;
  list-style-type: none;

  & ul:not(.browser-default) {
    padding-left: 0;
    list-style-type: none;
  }

  & span.badge {
    margin-top: calc(24px - 11px);
  }

  &.right-aligned {
    right: 0;
    transform: translateX(105%);
    left: auto;
    transform: translateX(100%);
  }

  & .divider {
    margin: 8px 0 0 0;
  }

  & .subheader {
    cursor: initial;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
  }

  & .subheader:hover {
    background-color: transparent;
  }

  .drag-target {
    height: 100%;
    width: 10px;
    position: fixed;
    top: 0;
    z-index: 998;
  }

  &.fixed {
    left: 0;
    transform: translateX(0);
    position: fixed;
  }

  &.fixed.right-aligned {
    right: 0;
    left: auto;
  }

  @media only screen and (max-width: 992px) {
    &.fixed {
      transform: translateX(-105%);
    }
    &.fixed.right-aligned {
      transform: translateX(105%);
    }
    & a {
      padding: 0 16px;
    }
  }
`;

export const CollapsibleList = styled.ul`
  margin: 0;
  border: none;
  box-shadow: none;

  & li {
    padding: 0;
  }
`;

export const SideNavCollapsibleHeader = styled.div`
  background-color: transparent;
  border: none;
  line-height: inherit;
  height: inherit;
  padding: 0 16px;

  & :hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & i {
    line-height: inherit;
  }
`;

export const SideNavCollapsibleBody = styled.div`
  border: 0;
  background-color: #fff;
  padding: 0;

& li a {
  padding: 0 23.5px 0 31px;
}
& > ul:not(.collapsible) > li.active {
  background-color: #ee6e73;
}

& > ul:not(.collapsible) > li.active a {
  color: #fff;
}

`;

export const SideNavSearchListItem = styled.li`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin-top: 1px;
  padding: 1px 0 0 0;
  z-index: 2;
`;

export const SideNavSearchInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: content-box;
  transition: all 0.3s;
  display: block;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  height: 45px;
  margin: 0;
  box-sizing: border-box;
  padding: 0 45px 0 15px;
  border: 0;
`;

export const SideNavSearchWrapCard = styled.div`
  position: relative;
  margin: .5rem 0 1rem 0;
  background-color: #fff;
  transition: -webkit-box-shadow .25s;
  transition: box-shadow .25s;
  transition: box-shadow .25s, -webkit-box-shadow .25s;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  margin: 0 12px;
  transition: margin .25s ease;
`;
