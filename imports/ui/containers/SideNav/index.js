import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { SideNav as SideNavWrap, SideNavSearchListItem, CollapsibleList, SideNavCollapsibleHeader, SideNavCollapsibleBody, SideNavSearchInput, SideNavSearchWrapCard } from 'components';
// import { updateMainSize } from 'reducers/size';
import { sizeComponent, rest } from 'modules'; // eslint-disable-line no-unused-vars


const Li = styled.li`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  float: none;
  line-height: 48px;

  &.active {
    background-color: rgba(0, 0, 0, 0.05);
  }
  & a {
    text-decoration: none;
  }
  & > a {
    color: rgba(0, 0, 0, 0.87);
    display: block;
    font-size: 14px;
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    height: 48px;
    line-height: 48px;
    padding: 0 32px;
  }
  & > a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${'' /* & > a.btn,
  & > a.btn-large,
  & > a.btn-large,
  & > a.btn-flat,
  & > a.btn-floating {
    margin: 10px 15px;
  }
  & > a.btn,
  & > a.btn-large,
  & > a.btn-large,
  & > a.btn-floating {
    color: #fff;
  }
  & > a.btn-flat {
    color: #343434;
  }
  & > a.btn:hover,
  & > a.btn-large:hover,
  & > a.btn-large:hover {
    background-color: #2bbbad;
  }
  & > a.btn-floating:hover {
    background-color: #26a69a;
  }
  & > a > i,
  & > a > [class^="mdi-"],
  & > a li > a > [class*="mdi-"],
  & > a > i.material-icons {
    float: left;
    height: 48px;
    line-height: 48px;
    margin: 0 32px 0 0;
    width: 24px;
    color: rgba(0, 0, 0, 0.54);
  } */}
`;

const collapsibleListItemProps = {
  header: { children: 'Main Link' },
  links: [{ href: '#', children: 'Sub Link' }, { href: '#', children: 'Sub Link' }, { href: '#', children: 'Sub Link' }],
};

class CollapsibleListItem extends PureComponent {
  static propTypes = {
    header: PropTypes.string,
    links: PropTypes.array,
  }
  render() {
    return (
      <Li bold>
        <SideNavCollapsibleHeader {...this.props.header}
          className='waves-effect waves-teal'/>
        <SideNavCollapsibleBody>
          <ul>
            {this.props.links.map((link, key) => (
              <Li key={key}><a {...link}/></Li>
            ))}
          </ul>
        </SideNavCollapsibleBody>
      </Li>
    );
  }
}

@sizeComponent()
// @connect(({ size }) => ({ SideNavSize: size.SideNav }))
export default class SideNav extends PureComponent {
  static propTypes = {
    size: PropTypes.object,
    // SideNavSize: PropTypes.object,
  }
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size;
  }
  componentDidMount() {
    // this.props.dispatch(updateMainSize(this.props.size));
  }
  componentDidUpdate() {
    // this.props.dispatch(updateMainSize(this.props.size));
  }
  render() {
    return (
      <SideNavWrap className='side-nav fixed'>
        <SideNavSearchListItem className='search'>
          <SideNavSearchWrapCard className='search-wrapper card'>
            <SideNavSearchInput id='search'/>
            {/* <i className='material-icons'>search</i> */}
            <div className='search-results'></div>
          </SideNavSearchWrapCard>
        </SideNavSearchListItem>
        <Li bold>
          <a className='waves-effect waves-teal' href='#'>Quick Link</a>
        </Li>
        <Li bold>
          <a className='waves-effect waves-teal' href='#'>Quick Link</a>
        </Li>
        <Li bold>
          <a className='waves-effect waves-teal' href='#'>Quick Link</a>
        </Li>
        <Li bold>
          <a className='waves-effect waves-teal' href='#'>Quick Link</a>
        </Li>
        <Li className='no-padding'>
          <CollapsibleList>
            <CollapsibleListItem {...collapsibleListItemProps}/>
            <CollapsibleListItem {...collapsibleListItemProps}/>
            <CollapsibleListItem {...collapsibleListItemProps}/>
          </CollapsibleList>
        </Li>
      </SideNavWrap>
    );
  }
}
