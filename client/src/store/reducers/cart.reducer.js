const { TOGGLE_CART_HIIDDEN } = require("store/actions/types.actions");

const INITIAL_STATE = {
  hidden: true
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case TOGGLE_CART_HIIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default: 
      return state;
  }
}