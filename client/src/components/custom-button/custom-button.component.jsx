import React from 'react';

export const CustomButton = ({ children, ...props }) => (
	<button className={props.type === 'submit' ? 'btn submit-btn' : 'btn'} {...props}>{children}</button>
);