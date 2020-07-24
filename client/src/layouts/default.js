import React from 'react';

import { Content } from 'layouts/layout.styles';

export const ContentMainLayout = ({ children }) => {
	return <Content className='content'>{children}</Content>;
};
