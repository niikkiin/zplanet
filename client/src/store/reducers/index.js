import { combineReducers } from 'redux';

import cartReducer from 'store/reducers/cart.reducer';

export default combineReducers({
  cart: cartReducer
});
