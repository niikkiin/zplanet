import React from 'react';
// import { Sectiontitle } from 'components/section-title/section-title.component';
import ProductSummary from 'components/product-summary/product-summary.component';
import { BillingForm } from 'components/billing-form/billing-form.component';
import { Terms } from 'components/terms/terms.component';
import { CustomButton } from 'components/custom-button/custom-button.component';

const CheckoutPage = () => {
	return (
		<>
			<div className='checkout'>
				<div className='summary'>
					<h3 className='checkout-title'>Checkout</h3>
					
					<ProductSummary />
					<Terms />
					<div className='checkout-button'>
						<CustomButton type='submit'>Checkout Now</CustomButton>
					</div>
				</div>
				<div className='billing'>
					<h3 className='checkout-title billing-title'>Billing</h3>
					<BillingForm />
				</div>
			</div>
		</>
	);
};

export default CheckoutPage;
