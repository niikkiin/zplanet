import React from 'react';

import 'components/preview-all-items/preview-all-items.styles.css';

import { MainCardItem } from 'components/main-card-item/main-card-item.component';

import { Row, Col } from 'antd';
export const PreviewAllItems = ({ items, title }) => {
	return (
		<>
			<h1 className='title'>{title}</h1>
			<Row type='flex'>
				{/* <div className='preview'> */}
					{items.map(({ id, ...otherItemProps }) => (
						<Col xs={24} sm={12} md={6} lg={6} xl={6}>
							<MainCardItem className='box' key={id} {...otherItemProps} />
						</Col>
					))}
				{/* </div> */}
			</Row>
		</>
	);
};
