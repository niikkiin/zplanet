import React, { useState } from 'react';

import { DirectoryContainer, DirectoryMenu, MenuItemContainer, Title, AllMenu } from 'components/directory/directory.styles';

import { MenuItem } from 'components/menu-item/menu-item.component';

// data
import CATEGORY_DATA from 'data/categories.data';
import SHOP_DATA from 'data/shop.data';

// components
import { PreviewAllItems } from 'components/preview-all-items/preview-all-items.component';

export const Directory = () => {
	const [categories] = useState(CATEGORY_DATA);
	const [allItems] = useState(SHOP_DATA);

	return (
		<DirectoryContainer>
			<Title>Categories</Title>
			<DirectoryMenu>
				{categories.map(({ id, title, imageURL, subtitle }) => (
					<MenuItemContainer>
						<MenuItem key={id} title={title} subtitle={subtitle} imageURL={imageURL} />
					</MenuItemContainer>
				))}
			</DirectoryMenu>
			<Title className='title' level={2}>
				All Items
			</Title>
			<AllMenu>
				{allItems.map(({ id, ...otherAllItemProps }) => (
					<PreviewAllItems key={id} {...otherAllItemProps} />
				))}
			</AllMenu>
		</DirectoryContainer>
	);
};
