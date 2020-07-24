import React from 'react';

import "components/main-card-item/main-card-item.styles.css";

import { Card } from 'antd';

const { Meta } = Card;

export const MainCardItem = ({ name, description, imageURL }) => {
	return (
		<div className='main-card-holder'>
			<Card
				className='card-box'
				hoverable
				style={{ width: 200 }}
				cover={<img alt={name} src={imageURL} />}
			>
				<Meta title={name} description={description} />
			</Card>
		</div>
	);
};
