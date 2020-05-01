// GLOBAL APP CONTROLLER

import HomePage from "./home/index";
import RestaurantListPage from "./restaurant-list/index";
import RestaurantMenuPage from "./restaurant-menu/index";
import LoginPage from "./login/index";
import SignupPage from "./sign-up/index";
import ContactusPage from "./contact-us/index";
import CheckoutPage from "./checkout/index";


// eslint-disable-next-line no-undef
window.addEventListener("load", () => {
    // eslint-disable-next-line no-undef
    const path = window.location.pathname;
    // eslint-disable-next-line no-unused-vars
    let page = null;

    if (path.indexOf("restaurant-list") > -1) {
        page = new RestaurantListPage();
    }
    else if (path.indexOf("restaurant-menu") > -1) {
        page = new RestaurantMenuPage();
    }
    else if (path.indexOf("login") > -1) {
        page = new LoginPage();
    }
    else if (path.indexOf("sign-up") > -1) {
        page = new SignupPage();
    }
    else if (path.indexOf("contact-us") > -1) {
        page = new ContactusPage();
    }
    else if (path.indexOf("checkout") > -1) {
        page = new CheckoutPage();
    }
    else {
        page = new HomePage();
    }

});
