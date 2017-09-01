import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { sizeComponent, content } from 'modules'; // eslint-disable-line no-unused-vars
import { updateFooterSize } from 'reducers/size';
import { Footer as FooterWrap, Container, P } from 'components';

@sizeComponent()
@connect(({ size }) => ({ FooterSize: size.Footer }))
export default class Footer extends PureComponent {
  static propTypes = {
    size: PropTypes.object,
    FooterSize: PropTypes.object,
  }
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size;
  }
  componentDidMount() {
    this.props.dispatch(updateFooterSize(this.props.size));
  }
  componentDidUpdate() {
    this.props.dispatch(updateFooterSize(this.props.size));
  }
  render() {
    return (
      <FooterWrap>
        <Container>
          <P {...content.footer.copyright}/>
        </Container>
      </FooterWrap>
    );
  }
}
