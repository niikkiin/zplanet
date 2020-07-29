import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

export const CategoryItem = ({ title, imageURL, subtitle, routeName }) => {
	return (
		<Link className='category-item-wrapper' smooth to={routeName}>
			<div class='cards-list box'>
				<div class='card 1'>
					<div class='card_image'>
						{' '}
						<img src={imageURL} alt={title} />{' '}
					</div>
					<div class='card_title'>
						<p>{title}</p>
	          <div className='subtitle'>{subtitle}</div>
					</div>
				</div>
			</div>
		</Link>
		);
};
