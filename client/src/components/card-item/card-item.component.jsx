import React from 'react';

// redux
import { addItem, removeItem } from 'store/actions/cart.action';
import { connect } from 'react-redux';

const CardItem = ({ item, addItem,removeItem }) => {
	const { name, description, price, imageURL } = item;
	return (
		<div className='card-item-container'>
			<figure className='snip1171'>
				<div className="card-img-container">
				<img src={imageURL} alt={name} />

				</div>
				<div className='view-more'>view more</div>
				<figcaption>
					<div className='card-details'>
						<span className='card-name'>{name}</span>
						<div className='more-details'>
							<div className='new-price'>₱{price}</div>
							<div className='stock-details'>in stock</div>
						</div>
						<div className='description'>{description}</div>
					</div>
					<div className='card-item-quantity'>
						<button className='card-minus' onClick={() => removeItem(item)}>-</button>
						<div className='card-quantity'>0</div>
						<button className='card-plus' onClick={() => addItem(item)}>+</button>
					</div>
				</figcaption>
			</figure>
		</div>
	);
};
export default connect(null, { addItem, removeItem })(CardItem);
