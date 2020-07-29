import React from 'react';
import CardItem from 'components/card-item/card-item.component';

const CardHolder = ({ title, routeName, items }) => {
	return (
		<div id={routeName} className='card-holder-container'>
			<div className='title'>{title}</div>
				<div className="card-items-container">
					{items.map((item) => {
						return (
							<CardItem key={item.id} item={item} />
						);
					})}
				</div>
		</div>
	);
};

export default CardHolder;
