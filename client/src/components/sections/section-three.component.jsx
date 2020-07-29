import React, { useState } from 'react';

// data
import SHOP_DATA from 'data/shop.data';

// components
import { Sectiontitle } from 'components/section-title/section-title.component';
import CardHolder from 'components/card-holder/card-holder.component';

export const SectionThree = () => {
	const [products] = useState(SHOP_DATA);
	return (
		<>
			<Sectiontitle title='All Items' />
			<>
				{products.map(({ id, title, routeName, items }) => (
					<>
						<CardHolder key={id} routeName={routeName} title={title} items={items} />
					</>
				))}
			</>
		</>
	);
};
