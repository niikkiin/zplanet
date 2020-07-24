import React from 'react';

// redux
import { connect } from 'react-redux';
import { toggleCartHidden } from 'store/actions/cart.actions';

import { CartIconContainer } from 'components/cart-icon/cart-icon.styles';

// icon
import { ReactComponent as ShoppingCart } from 'assets/ShoppingCart.svg';

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingCart className='shopping-icon' />
			<span className='item-count'>0</span>
		</CartIconContainer>
	);
};

// const mapDispatchToProps = (dispatch) => ({
// 	toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

export default connect(null, { toggleCartHidden })(CartIcon);
