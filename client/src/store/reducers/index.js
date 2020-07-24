import {combineReducers} from 'redux';

// reducers
import {cartReducer} from 'store/reducers/cart.reducer';

export default combineReducers({
  cart: cartReducer
});