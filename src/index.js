// GLOBAL APP CONTROLLER

import NavComponent from "./components/nav/index";
import FooterComponent from "./components/footer/index";
import ItemModalComponent from "./components/menu-item-modal/index";
import CartComponent from "./components/cart/index";
import LocationSelectionComponent from "./components/location-selection/index";
import RestaurantSelectionComponent from "./components/restaurant-selection/index";

import HomePage from "./home/index";
import RestaurantListPage from "./restaurant-list/index";
import RestaurantMenuPage from "./restaurant-menu/index";
import CheckoutPage from "./checkout/index";


const navComponent = new NavComponent();
const footerComponent = new FooterComponent();
const itemModalComponent = new ItemModalComponent();
const cartComponent = new CartComponent();
const locationSelectionComponent = new LocationSelectionComponent();
const restaurantSelectionComponent = new RestaurantSelectionComponent();

const homePage = new HomePage();
const restaurantListPage = new RestaurantListPage();
const restaurantMenuPage = new RestaurantMenuPage();
const checkoutPage = new CheckoutPage();