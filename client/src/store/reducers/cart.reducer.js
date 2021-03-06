// import types
import { ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from 'store/actions/action.types';

// utils
import { addItemToCart, removeItemFromCart } from 'store/utils/cart.utils';

const INITIAL_STATE = {
	cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, payload),
			};
		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, payload)
			}
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
			};
		default:
			return state;
	}
};

export default cartReducer;
