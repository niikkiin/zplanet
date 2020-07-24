import React from 'react';
import { CollectionItem } from 'components/collection-item/collection-item.component';

import { Col, Row } from 'antd';

export const PreviewCollection = ({ title, items }) => {
	return (
		<>
			<h1 className='title'>{title}</h1>
			<Row type='flex'>
				{items.map(({ id, ...otherItemProps }) => (
					<Col xs={12}>
						<CollectionItem key={id} {...otherItemProps} />
					</Col>
				))}
			</Row>
		</>
	);
};
