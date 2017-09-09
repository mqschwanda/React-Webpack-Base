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
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
  height: 100%;
  height: calc(100% + 60px);
  height: -moz-calc(100%);
  padding-bottom: 60px;
  background-color: #fff;
  z-index: 999;
  overflow-y: auto;
  will-change: transform;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translateX(-105%);
          transform: translateX(-105%);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  padding-left: 0;
list-style-type: none;
  & li a {
    text-decoration: none;
  }
  & ul:not(.browser-default) {
    padding-left: 0;
    list-style-type: none;
  }

  & span.badge {
    margin-top: calc(24px - 11px);
  }

  & .collapsible,
  &.fixed .collapsible {
    border: none;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  & .collapsible li,
  &.fixed .collapsible li {
    padding: 0;
  }

  & .collapsible-header,
  &.fixed .collapsible-header {
    background-color: transparent;
    border: none;
    line-height: inherit;
    height: inherit;
    padding: 0 16px;
  }

  & .collapsible-header:hover,
  &.fixed .collapsible-header:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & .collapsible-header i,
  &.fixed .collapsible-header i {
    line-height: inherit;
  }

  & .collapsible-body,
  &.fixed .collapsible-body {
    border: 0;
    background-color: #fff;
  }

  & .collapsible-body li a,
  &.fixed .collapsible-body li a {
    padding: 0 23.5px 0 31px;
  }

  &.right-aligned {
    right: 0;
    -webkit-transform: translateX(105%);
            transform: translateX(105%);
    left: auto;
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }

  & .collapsible {
    margin: 0;
  }

  & li {
    float: none;
    line-height: 48px;
  }

  & li.active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & li > a {
    color: rgba(0, 0, 0, 0.87);
    display: block;
    font-size: 14px;
    font-weight: 500;
    height: 48px;
    line-height: 48px;
    padding: 0 32px;
  }

  & li > a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  & li > a.btn, & li > a.btn-large, & li > a.btn-large, & li > a.btn-flat, & li > a.btn-floating {
    margin: 10px 15px;
  }

  & li > a.btn, & li > a.btn-large, & li > a.btn-large, & li > a.btn-floating {
    color: #fff;
  }

  & li > a.btn-flat {
    color: #343434;
  }

  & li > a.btn:hover, & li > a.btn-large:hover, & li > a.btn-large:hover {
    background-color: #2bbbad;
  }

  & li > a.btn-floating:hover {
    background-color: #26a69a;
  }

  & li > a > i,
  & li > a > [class^="mdi-"], & li > a li > a > [class*="mdi-"],
  & li > a > i.material-icons {
    float: left;
    height: 48px;
    line-height: 48px;
    margin: 0 32px 0 0;
    width: 24px;
    color: rgba(0, 0, 0, 0.54);
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

  & .user-view,
  & .userView {
    position: relative;
    padding: 32px 32px 0;
    margin-bottom: 8px;
  }

  & .user-view > a,
  & .userView > a {
    height: auto;
    padding: 0;
  }

  & .user-view > a:hover,
  & .userView > a:hover {
    background-color: transparent;
  }

  & .user-view .background,
  & .userView .background {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  & .user-view .circle, & .user-view .name, & .user-view .email,
  & .userView .circle,
  & .userView .name,
  & .userView .email {
    display: block;
  }

  & .user-view .circle,
  & .userView .circle {
    height: 64px;
    width: 64px;
  }

  & .user-view .name,
  & .user-view .email,
  & .userView .name,
  & .userView .email {
    font-size: 14px;
    line-height: 24px;
  }

  & .user-view .name,
  & .userView .name {
    margin-top: 16px;
    font-weight: 500;
  }

  & .user-view .email,
  & .userView .email {
    padding-bottom: 16px;
    font-weight: 400;
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
    -webkit-transform: translateX(0);
            transform: translateX(0);
    position: fixed;
  }

  &.fixed.right-aligned {
    right: 0;
    left: auto;
  }

  @media only screen and (max-width: 992px) {
    &.fixed {
      -webkit-transform: translateX(-105%);
              transform: translateX(-105%);
    }
    &.fixed.right-aligned {
      -webkit-transform: translateX(105%);
              transform: translateX(105%);
    }
    & a {
      padding: 0 16px;
    }
    & .user-view,
    & .userView {
      padding: 16px 16px 0;
    }
  }

  & .collapsible-body > ul:not(.collapsible) > li.active,
  &.fixed .collapsible-body > ul:not(.collapsible) > li.active {
    background-color: #ee6e73;
  }

  & .collapsible-body > ul:not(.collapsible) > li.active a,
  &.fixed .collapsible-body > ul:not(.collapsible) > li.active a {
    color: #fff;
  }

  & .collapsible-body {
    padding: 0;
  }
`;

export const SideNavCollapsible = styled.ul`

`;

export const SideNavCollapsibleHeader = styled.div`

`;

export const SideNavCollapsibleBody = styled.div`

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
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  display: block;
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  height: 45px;
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 45px 0 15px;
  border: 0;
`;

export const SideNavSearchWrapCard = styled.div`
  position: relative;
  margin: .5rem 0 1rem 0;
  background-color: #fff;
  -webkit-transition: -webkit-box-shadow .25s;
  transition: -webkit-box-shadow .25s;
  transition: box-shadow .25s;
  transition: box-shadow .25s, -webkit-box-shadow .25s;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  margin: 0 12px;
  -webkit-transition: margin .25s ease;
  transition: margin .25s ease;
`;
