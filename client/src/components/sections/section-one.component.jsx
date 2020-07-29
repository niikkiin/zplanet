import React, { useState } from 'react';

// data
import CATEGORY_DATA from 'data/categories.data';
import { CategoryItem } from 'components/category-item/category-item.component';
import { Sectiontitle } from 'components/section-title/section-title.component';

export const SectionOne = () => {
	const [categories] = useState(CATEGORY_DATA);

	return (
		<>
			<Sectiontitle title='Categories' />
			<div className='category-items-wrapper'>
				{categories.map(({ id, title, imageURL, subtitle, routeName }) => (
					<CategoryItem className='box' key={id} routeName={routeName} title={title} subtitle={subtitle} imageURL={imageURL} />
				))}
			</div>
		</>
	);
};
