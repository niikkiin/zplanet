import React from 'react';

// redux
import { clearItemFromCart, addItem, removeItem } from 'store/actions/cart.action';
import { connect } from 'react-redux';

const CheckoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
	const { name, imageURL, quantity } = cartItem;
	return (
		<div className='checkout-container'>
			<div className='product-container'>
				<div className='img-container'>
					<img src={imageURL} alt={name} />
				</div>
				<div className='checkout-item-name'>{name}</div>
			</div>
			<div className='quantity'>
				<div className='cart-minus' onClick={() => removeItem(cartItem)}>-</div>
				<div className='count'>{quantity}</div>
				<div className='cart-plus' onClick={() => addItem(cartItem)}>+</div>
			</div>
			<div className='price'>₱ 100.00</div>
			<div className='remove-wrapper' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
		</div>
	);
};
export default connect(null, { clearItemFromCart, addItem, removeItem })(CheckoutItem);