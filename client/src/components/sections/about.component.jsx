import React from 'react';
import { Sectiontitle } from 'components/section-title/section-title.component';

export const About = () => {
	return (
		<>
			<Sectiontitle title='About Us' />
			<div className='about-paragraph'>
				<div className='container'>
					<div id='timeline'>
						<div className='timeline-item'>
							<div className='timeline-icon'>x</div>
							<div className='timeline-content'>
								<h2>1941</h2>
								<p>
									ElarZ Lechon history begun in 1941 in Montalban, Rizal. It was started as a small
									business engaging in hog-raising to produce pork meat for public markets by couple
									of Jose and Leonor Lontoc.
								</p>
							</div>
						</div>

						<div className='timeline-item'>
							<div className='timeline-icon'>x</div>
							<div className='timeline-content right'>
								<h2>1960</h2>
								<p>
									In 1960, the couple coined the name for their enterprise by getting the initials of
									their surnames, “L” and “R,” and turning it into a word, thus ELAR was born.
								</p>
							</div>
						</div>

						<div className='timeline-item'>
							<div className='timeline-icon'>x</div>
							<div className='timeline-content'>
								<h2>1972</h2>
								<p>
									Through the years, Jose and Leonor perfected the roasting of the lechon aided by
									their love of cooking. So in 1972, they formalized Elar’s Lechon which promised the
									best-tasting lechon to its growing customer base.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
