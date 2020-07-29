import React from 'react';
import CheckoutItem from 'components/checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/selectors/cart.selector';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

const ProductSummary = ({ cartItems, total, history }) => {
	const columns = ['Products', 'Quantity', 'Price', 'Remove'];

	return (
			<div className='product-summary-container'>
			<div className='product-columns product-headings'>
				{columns.map((heading) => (
					<div>{heading}</div>
				))}
			</div>
			<div className='product-items'>
				{
				cartItems.length ?
				
				cartItems.map((cartItem) => {
					return <CheckoutItem cartItem={cartItem} />;
				})
			: <div className='cart-empty'>Your cart is empty
			<CustomButton onClick={() => history.push('/')}>Go back to Shopping</CustomButton>
			</div>
				}
			</div>
			<div className='total-price'>
				<div className='total'>Total:</div>
				<div className='quantity'>0</div>
				<div className='price'>₱ {total}</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(ProductSummary));
