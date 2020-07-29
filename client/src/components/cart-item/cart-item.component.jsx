import React from 'react';

const CartItem = ({ item: { imageURL, price, name, quantity } }) => {
	return (
		<li className='cart-toggle-contents'>
			<div className='cart-toggle-img'>
				<img src={imageURL} alt='prod1' />
			</div>
			<div className='cart-toggle-details'>
				<div className='cart-toggle-name'>{name}</div>
				<div className='quantity-price'>
					{quantity} x ₱ {price}
				</div>
			</div>
		</li>
	);
};

export default CartItem;