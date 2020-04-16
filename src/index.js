// GLOBAL APP CONTROLLER

import HomePage from "./home/index";
import RestaurantListPage from "./restaurant-list/index";
import RestaurantMenuPage from "./restaurant-menu/index";
import LoginPage from "./login/index";
import SignupPage from "./sign-up/index";
import ContactusPage from "./contact-us/index";
import CheckoutPage from "./checkout/index";


window.addEventListener("load", () => {
    const path = window.location.pathname;
    console.log(path);

    if (path.indexOf("restaurant-list") > -1) {
        const restaurantListPage = new RestaurantListPage();
    }
    else if (path.indexOf("restaurant-menu") > -1) {
        const restaurantListPage = new RestaurantMenuPage();
    }
    else if (path.indexOf("login") > -1) {
        const restaurantListPage = new LoginPage();
    }
    else if (path.indexOf("sign-up") > -1) {
        const restaurantListPage = new SignupPage();
    }
    else if (path.indexOf("contact-us") > -1) {
        const restaurantListPage = new ContactusPage();
    }
    else if (path.indexOf("checkout") > -1) {
        const restaurantListPage = new CheckoutPage();
    }
    else {
        const restaurantListPage = new HomePage();
    }

});
