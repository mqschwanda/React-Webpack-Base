import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { sizeReducer as size } from './size';

export default combineReducers({ size, router });
