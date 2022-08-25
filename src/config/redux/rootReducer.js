import { combineReducers } from 'redux';

import productOrderReducer from './cart-product/reducer';

const rootReducer = combineReducers({
  productOrder: productOrderReducer
});

export default rootReducer;