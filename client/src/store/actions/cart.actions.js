// types
import { TOGGLE_CART_HIIDDEN } from "store/actions/types.actions";

export const toggleCartHidden = () => dispatch => {

  dispatch({
    type: TOGGLE_CART_HIIDDEN
  })
};