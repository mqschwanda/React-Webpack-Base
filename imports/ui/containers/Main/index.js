import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { Main as MainWrap, Container, P } from 'components';
import { updateMainSize } from 'reducers/size';
import { sizeComponent } from 'modules'; // eslint-disable-line no-unused-vars

@sizeComponent()
@connect(({ size }) => ({ MainSize: size.Main }))
export default class Main extends PureComponent {
  static propTypes = {
    size: PropTypes.object,
    MainSize: PropTypes.object,
  }
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size;
  }
  componentDidMount() {
    this.props.dispatch(updateMainSize(this.props.size));
  }
  componentDidUpdate() {
    this.props.dispatch(updateMainSize(this.props.size));
  }
  render() {
    return (
      <MainWrap>
        <Container>
          <P>main</P>
        </Container>
      </MainWrap>
    );
  }
}
