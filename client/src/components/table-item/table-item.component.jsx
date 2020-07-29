import React from 'react';

const TableItem = ({ name, description, imageURL, price }) => {
	return (
		<tr className='table-item-container'>
			<td className='table-image-name-container'>
				<div className='table-img-container'>
					<img src={imageURL} alt={name} />
				</div>
				<div className='product-name'>{name}</div>
			</td>
			<td>{description}</td>
			<td className='quant'>
				0
			</td>
			<td>{price}</td>
		</tr>
	);
};

export default TableItem;
