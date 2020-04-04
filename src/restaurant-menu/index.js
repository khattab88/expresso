import { elements } from "./view";

export default class restaurantMenuCtrl {

    init() {

        /// setup event listeners

        // toggle mobile nav
        elements.navToggle.addEventListener("click", e => { 
            elements.navigationItems.classList.toggle("navigation__items--mobile-open");
        });

        // toggle nav country
        elements.navCountryBtn.addEventListener("click", e => {
            elements.navCountryBtn.classList.toggle("country-btn--open");
            elements.navCountryDropdown.classList.toggle("country-dropdown--open");
        });
        
    }
}