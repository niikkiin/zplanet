import React, { useState } from 'react';

// data
import SHOP_DATA from 'data/shop.data';

// components
import { Sectiontitle } from 'components/section-title/section-title.component';
import Table from 'components/table/table.component';

export const SectionTwo = () => {
	const [products] = useState(SHOP_DATA);
	return (
		<>
			<Sectiontitle title='All Items' subtitle='lorem ipsum dolor emit section 2' />
			<div className='product-items-wrapper'>
				{products.map(({ id, title, items }) => (
          <Table key={id} title={title} items={items} />
				))}
			</div>
		</>
	);
};
