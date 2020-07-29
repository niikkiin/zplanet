import React from 'react';

// icons
import { Icon } from '@iconify/react';
import bxlFacebook from '@iconify/icons-bx/bxl-facebook';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';
import bxlTwitter from '@iconify/icons-bx/bxl-twitter';

export const Footer = () => {
	return (
		<footer className='site-footer'>
			<div className='content'>
				<div className='about'>
					<h4 className='footer-title'>About</h4>
					<div className='footer-content'>
						ElarZ Lechon history begun in 1941 in Montalban, Rizal. It was started as a small business
						engaging in hog-raising to produce pork meat for public markets by couple of Jose and Leonor
						Lontoc. In 1960, the couple coined the name for their enterprise by getting the initials of
						their surnames, “L” and “R,” and turning it into a word, thus ELAR was born. Through the years,
						Jose and Leonor perfected the roasting of the lechon aided by their love of cooking. So in 1972,
						they formalized Elar’s Lechon which promised the best-tasting lechon to its growing customer
						base.
					</div>
				</div>
				<div className='about'>
					<h4 className='footer-title'>Categories</h4>
					<div className='footer-content'>
						<div className='category-link'>Canned Lechon Variants</div>
						<div className='category-link'>ElarZ Special Lechon</div>
					</div>
				</div>
			</div>
			<hr className='small' />
      <div className="footer-end">
        <div className="copyright">Copyright © 2020 All Rights Reserved by ZPlanet.</div>
        <ul class='social-icons'>
          <li>
            <Icon className='icon' icon={bxlFacebook}  />
          </li>
          <li>
            <Icon className='icon' icon={bxlInstagram} />
          </li>
          <li>
            <Icon className='icon' icon={bxlTwitter} />
          </li>
        </ul>
      </div>
		</footer>
	);
};
