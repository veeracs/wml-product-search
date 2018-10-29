import {combineReducers} from 'redux';

import items from './items';
import product from './product';
import recommendations from './recommendations';

const rootReducer = combineReducers({
  items,
  recommendations,
  product
});

export default rootReducer;
