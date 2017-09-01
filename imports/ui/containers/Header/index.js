import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { sizeComponent, content } from 'modules'; // eslint-disable-line no-unused-vars
import { updateHeaderSize } from 'reducers/size';
import { Header as HeaderWrap, Container, Brand } from 'components';

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
          <Brand {...content.header.brand}/>
        </Container>
      </HeaderWrap>
    );
  }
}
