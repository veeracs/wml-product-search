import {combineReducers} from 'redux';

import items from './items';
import product from './product';

const rootReducer = combineReducers({
  items,
  product
});

export default rootReducer;
