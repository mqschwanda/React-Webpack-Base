import store from '../../reducers/index';
import { push } from 'react-router-redux';

export default function (path) {
  store.dispatch(push(path));
}
