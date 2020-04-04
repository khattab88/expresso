import { elements } from "./view";

export default class restaurantMenuCtrl {

    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        // toggle mobile nav
        elements.navToggle.addEventListener("click", e => { 
            elements.navigationItems.classList.toggle("navigation__items--mobile-open");
        });

        // toggle nav country
        elements.navCountryBtn.addEventListener("click", e => {
            elements.navCountryBtn.classList.toggle("country-btn--open");
            elements.navCountryDropdown.classList.toggle("country-dropdown--open");
        });

        // toggle nav category dropdown
        elements.navCategoryBtn.addEventListener("click", e => {
            elements.navCategoryBtn.classList.toggle("category-btn--open");
            elements.navCategoryDropdown.classList.toggle("category-dropdown--open");
        });
    }
}