import React from 'react';

export const FormInput = ({ handleChange, label, ...props }) => (
	<div className='form-input-container'>
		<input autoComplete='off' onChange={handleChange} {...props} />
		{label ? (
			<label htmlFor={label} className={props.value.length ? 'shrink' : ''}>
				{label}
			</label>
		) : null}
	</div>
);
