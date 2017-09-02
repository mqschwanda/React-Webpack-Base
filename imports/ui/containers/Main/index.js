import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars
import http from 'http';

import { Main as MainWrap, Container, P, Card, Row, Col } from 'components';
import { updateMainSize } from 'reducers/size';
import { sizeComponent } from 'modules'; // eslint-disable-line no-unused-vars

function getCollection(component) {
  let rawData = '';
  http.get('/api/collection', (res) => {
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const data = JSON.parse(rawData);
        console.log(data);
        if (component.state.data !== data) component.setState({ data });
      } catch (e) { console.error(e.message); }
    });
  }).on('error', (e) => { console.error(`Got error: ${e.message}`); });
}

@sizeComponent()
@connect(({ size }) => ({ MainSize: size.Main }))
export default class Main extends PureComponent {
  static propTypes = {
    size: PropTypes.object,
    MainSize: PropTypes.object,
  }
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.size !== nextProps.size || this.state !== nextState;
  }
  componentDidMount() {
    this.props.dispatch(updateMainSize(this.props.size));
    getCollection(this);
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
                <P>Data</P>
                {this.state.data.map(({ _id, createdOn }) => (
                  <P key={_id}>{`${createdOn}`}</P>
                ))}
              </Card>
            </Col>
          </Row>
        </Container>
      </MainWrap>
    );
  }
}
