import React from 'react';
import TableItem from 'components/table-item/table-item.component';

const Table = ({ title, items }) => {
	const columns = ['Images', 'Description', 'Quantity', 'Price'];
	return (
		<div className='table-container'>
			<div className='title'>{title}</div>
			<table className='table'>
				<thead>
					{columns.map((heading) => (
						<th>{heading}</th>
					))}
				</thead>
				<tbody>
					{items.map((item) => {
						const { id, name, description, imageURL, price } = item;
						return (
							<TableItem
								key={id}
								name={name}
								description={description}
								imageURL={imageURL}
								price={price}
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
