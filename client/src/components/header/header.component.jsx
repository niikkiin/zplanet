import React from 'react';

// icons
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-feather/shopping-cart';

// components
import CartItem from 'components/cart-item/cart-item.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

// router
import { withRouter } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { selectCartItemsCount, selectCartItems, selectCartTotal } from 'store/selectors/cart.selector';

const Header = ({ cartItems, itemCount, total, history }) => {
	return (
		<>
			<div className='header'></div>
			<input type='checkbox' className='openSidebarMenu' id='openSidebarMenu' />
			<label for='openSidebarMenu' className='sidebarIconToggle'>
				<Icon icon={shoppingCart} className='shopping-cart-icon' />
				{itemCount === 0 ? null : <div class='cart-badge'>{itemCount}</div>}
			</label>
			<div id='sidebarMenu'>
				<ul className='sidebarMenuInner'>
					{cartItems.length ? (
						<>
							<li>
								<div className='total-cart-price'>₱ {total}</div>

								<CustomButton onClick={() => history.push('/checkout')} className='checkout-btn btn'>
									Proceed to Checkout
								</CustomButton>
							</li>
							{cartItems.map((cartItem) => {
								const { id } = cartItem;
								return <CartItem key={id} item={cartItem} />;
							})}
							<li></li>
						</>
					) : (
						<div className='empty-cart-message'>Your cart is empty.</div>
					)}
				</ul>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	itemCount: selectCartItemsCount(state),
	total: selectCartTotal(state)
});

export default withRouter(connect(mapStateToProps)(Header));
