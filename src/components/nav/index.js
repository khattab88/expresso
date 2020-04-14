import { elements, NavView } from "./view";

export default class NavComponent {

    constructor() {
        this.setupEventListeners();
    }

    init() {
        this.view = new NavView();
        this.view.render();
    }

    setupEventListeners() {

        // initialize
        window.addEventListener("load", this.init);

        elements.container.addEventListener("click", e => {

            // toggle mobile nav
            if (e.target.matches(".navbar__toggle, .navbar__toggle *")) {
                const navigationItems = elements.container.querySelector(".navigation__items");
                navigationItems.classList.toggle("navigation__items--mobile-open");
            } 
            // toggle nav country
            else if (e.target.matches(".country-btn, .country-btn *")) {
                const navCountryBtn = elements.container.querySelector(".country-btn");
                navCountryBtn.classList.toggle("country-btn--open");

                const navCountryDropdown = elements.container.querySelector(".country-btn > .country-dropdown");
                navCountryDropdown.classList.toggle("country-dropdown--open");
            } 
            // toggle nav category dropdown
            else if (e.target.matches(".category-btn, .category-btn *")) {
                const navCategoryBtn = elements.container.querySelector(".category-btn");
                navCategoryBtn.classList.toggle("category-btn--open");

                const navCategoryDropdown = elements.container.querySelector(".category-dropdown");
                navCategoryDropdown.classList.toggle("category-dropdown--open");
            }

        });
    }
}