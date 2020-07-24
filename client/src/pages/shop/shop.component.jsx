import React, { useState } from 'react';

// data
import SHOP_DATA from 'data/shop.data';
import { PreviewCollection } from 'components/preview-collection/preview-collection.component';

export const ShopPage = () => {
	const [collections] = useState(SHOP_DATA);

	return (
		<>
			<h1>ShopPage</h1>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</>
	);
};
