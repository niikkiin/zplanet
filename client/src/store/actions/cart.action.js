// import types
import {
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,                       
  REMOVE_ITEM
} from 'store/actions/action.types';

export const addItem = item => dispatch => {
  dispatch({
    type: ADD_ITEM,
    payload: item
  })
}

export const removeItem = item => dispatch => {
  dispatch({
    type: REMOVE_ITEM,
    payload: item
  })
}

export const clearItemFromCart = item => dispatch => {
  dispatch({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  })
}