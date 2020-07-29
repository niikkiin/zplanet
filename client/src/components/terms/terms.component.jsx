import React from 'react';

export const Terms = () => {
	const terms = [
		'ElarZ Lechon delivery hotline (8742-0000) delivery of orders starts from 7am and last delivery is 9pm.',
		'ElarZ Lechon Delivery Online delivery service is available in Metro Manila',
		'Delivery Service maybe temporarily suspended during extreme weather conditions or other fortuitous events to ensure the quality of products and safety of our riders.',
		'Delivery charge depends on delivery area.',
		'Prices are subject to change without prior notice.',
		'Changes in the order will reset the selected delivery date/time but depends on the availability of the product.',
	];
	return (
		<div className='terms-container'>
			<div className='terms-title'>Terms & Conditions</div>
			<ul className='terms-list'>
				{terms.map((term) => (
					<li className='term'>{term}</li>
				))}
			</ul>
		</div>
	);
};
