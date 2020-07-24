import React from 'react';

// styles
import { Header } from 'components/header/header.styles';

// router
import { Link } from 'react-router-dom';
import CartIcon from 'components/cart-icon/cart-icon.component';
import { CartDropDown } from 'components/cart-dropdown/cart-dropdown.component';

export const HeaderMain = () => {
	return (
		<Header>
			<Link className='logo-container' to='/'>
				<div className='logo'></div>
			</Link>
			{/* <div className='header-right'> */}
				<div className='options'>
					<Link className='option' to='/shop'>
						<span>Shop</span>
					</Link>
					<Link className='option' to='/aabout'>
						<span>About Us</span>
					</Link>
				</div>
				<CartIcon />
				<CartDropDown />
			{/* </div> */}
		</Header>
	);
};
