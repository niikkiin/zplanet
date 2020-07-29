// Layout Types
import DefaultLayout from "layouts/default";
import CheckoutLayout from "layouts/checkout";


// Route Views
import HomePage from "pages/homepage/homepage.component";
import CheckoutPage from "pages/checkout/checkout.component";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: HomePage
  },
  {
    path: "/checkout",
    exact: true,
    layout: CheckoutLayout,
    component: CheckoutPage
  }
];