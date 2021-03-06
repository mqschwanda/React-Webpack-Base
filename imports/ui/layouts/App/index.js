import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { App as AppWrap } from 'components';
import { Header, Main, Footer, SideNav } from 'containers';
import { sizeComponent, Theme, InjectGlobalStyle } from 'modules'; // eslint-disable-line no-unused-vars
import { updateAppSize } from 'reducers/size';

@sizeComponent()
@connect(({ size }) => ({ AppSize: size.App }))
export default class App extends React.PureComponent {
  static propTypes = {
    size: PropTypes.object,
    AppSize: PropTypes.object,
  }
  shouldComponentUpdate(nextProps) {
    return this.props.size !== nextProps.size;
  }
  componentDidMount() {
    this.props.dispatch(updateAppSize(this.props.size));
  }
  componentDidUpdate() {
    this.props.dispatch(updateAppSize(this.props.size));
  }
  render() {
    return (
    <Theme>
      <AppWrap>
        <Header/>
        <Main/>
        <Footer/>
        <SideNav/>
      </AppWrap>
    </Theme>
    );
  }
}
