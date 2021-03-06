import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { Main as MainWrap, Container, P, Link, Card, CardContent, CardTitle, CardAction, Row, Col } from 'components';
import { updateMainSize } from 'reducers/size';
import { sizeComponent, rest } from 'modules'; // eslint-disable-line no-unused-vars

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
          <Row>
            <Col>
              <Card>
                <CardContent>
                  <CardTitle>Card</CardTitle>
                  <P>Content</P>
                </CardContent>
                <CardAction>
                  <Link pathTo='/' label='Link'/>
                  <Link pathTo='/' label='Link'/>
                </CardAction>
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrap>
    );
  }
}
