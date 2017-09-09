import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import { sizeComponent, content, pushPath } from 'modules'; // eslint-disable-line no-unused-vars
import { updateHeaderSize } from 'reducers/size';
import { Header as HeaderWrap, Container, BrandLink, Nav, NavWrapper, NavList, NavListItem, NavLink } from 'components';

@sizeComponent()
@connect(({ size }) => ({ HeaderSize: size.Header }))
export default class Header extends PureComponent {
  static propTypes = {
    size: PropTypes.object,
    HeaderSize: PropTypes.object,
  }
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size;
  }
  componentDidMount() {
    this.props.dispatch(updateHeaderSize(this.props.size));
  }
  componentDidUpdate() {
    this.props.dispatch(updateHeaderSize(this.props.size));
  }
  render() {
    return (
      <HeaderWrap>
        <Container>
          <Nav>
            <NavWrapper>
              <BrandLink pathTo='/home' {...content.header.BrandLink}/>
              <NavList>
                <NavListItem>
                  <NavLink pathTo='/home' {...content.header.NavLink.home}/>
                </NavListItem>
                <NavListItem>
                  <NavLink pathTo='/theme' {...content.header.NavLink.theme}/>
                </NavListItem>
                <NavListItem>
                  <NavLink pathTo='/about' {...content.header.NavLink.about}/>
                </NavListItem>
              </NavList>
            </NavWrapper>
          </Nav>
        </Container>
      </HeaderWrap>
    );
  }
}
