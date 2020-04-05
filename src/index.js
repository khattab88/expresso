// GLOBAL APP CONTROLLER

import NavComponent from "./components/nav/index";
import HeaderComponent from "./components/header/index";
import FooterComponent from "./components/footer/index";
import ItemModalComponent from "./components/menu-item-modal/index";
import CartComponent from "./components/cart/index";

import RestaurantListPage from "./restaurant-list/index";
import RestaurantMenuPage from "./restaurant-menu/index";
import CheckoutPage from "./checkout/index";


const navComponent = new NavComponent();
const headerComponent = new HeaderComponent();
const footerComponent = new FooterComponent();
const itemModalComponent = new ItemModalComponent();
const cartComponent = new CartComponent();

const restaurantListPage = new RestaurantListPage();
const restaurantMenuPage = new RestaurantMenuPage();
const checkoutPage = new CheckoutPage();