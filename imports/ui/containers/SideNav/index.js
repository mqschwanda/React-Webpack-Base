import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { SideNav as SideNavWrap, SideNavSearchListItem, SideNavCollapsible, SideNavCollapsibleHeader, SideNavCollapsibleBody, SideNavSearchInput, SideNavSearchWrapCard } from 'components';
// import { updateMainSize } from 'reducers/size';
import { sizeComponent, rest } from 'modules'; // eslint-disable-line no-unused-vars

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
      <SideNavWrap className='side-nav fixed' id='nav-mobile' /* style='transform: translateX(0%);'*/>
        <li className='logo'>
          <a className='brand-logo' href='/' id='logo-container'><object data='res/materialize.svg' id='front-page-logo' type='image/svg+xml'>
            Your browser does not support SVG
          </object></a>
        </li>
        <SideNavSearchListItem className='search'>
          <SideNavSearchWrapCard className='search-wrapper card'>
            <SideNavSearchInput id='search'/>
            {/* <i className='material-icons'>search</i> */}
            <div className='search-results'></div>
          </SideNavSearchWrapCard>
        </SideNavSearchListItem>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Quick Link</a></li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Quick Link</a></li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Quick Link</a></li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Quick Link</a></li>
        <li className='no-padding'>
          <SideNavCollapsible className='collapsible collapsible-accordion'>
            <li className='bold'>
              <SideNavCollapsibleHeader className='collapsible-header waves-effect waves-teal'>Main Link</SideNavCollapsibleHeader>
              <SideNavCollapsibleBody className='collapsible-body'>
                <ul>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                </ul>
              </SideNavCollapsibleBody>
            </li>
            <li className='bold'>
              <SideNavCollapsibleHeader className='collapsible-header waves-effect waves-teal'>Main Link</SideNavCollapsibleHeader>
              <SideNavCollapsibleBody className='collapsible-body'>
                <ul>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                </ul>
              </SideNavCollapsibleBody>
            </li>
            <li className='bold active'>
              <SideNavCollapsibleHeader className='collapsible-header active waves-effect waves-teal'>Main Link</SideNavCollapsibleHeader>
              <SideNavCollapsibleBody className='collapsible-body'>
                <ul>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                  <li><a href='#'>Sub Link</a></li>
                </ul>
              </SideNavCollapsibleBody>
            </li>
          </SideNavCollapsible>
        </li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Sub Link</a></li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Sub Link</a></li>
        <li className='bold'><a className='waves-effect waves-teal' href='#'>Sub Link<span className='new badge'></span></a></li>
      </SideNavWrap>
    );
  }
}
