// Route Views
import { ContentMainLayout } from "layouts/default";

// Components
import { HomePage } from "pages/homepage/homepage.component";
import { ShopPage } from "pages/shop/shop.component";


export default [
  {
    path: "/",
    exact: true,
    layout: ContentMainLayout,
    component: HomePage
  },
  {
    path: "/shop",
    exact: true,
    layout: ContentMainLayout,
    component: ShopPage
  },
];