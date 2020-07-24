import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;

export const MenuItem = ({ title, subtitle, imageURL }) => {
	return (
		<Card
			hoverable
			cover={<img alt={title} src={imageURL} />}
		>
			<Meta title={title} description={subtitle} />
		</Card>
	);
};
