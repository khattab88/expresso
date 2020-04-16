import { elements, NavView } from "./view";

export default class NavComponent {

    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        this.view = new NavView();
        this.view.render();
    }

    setupEventListeners() {

        elements.container.addEventListener("click", e => {

            // toggle mobile nav
            if (e.target.matches(".navbar__toggle, .navbar__toggle *")) {
                this.view.toggleMobileNav();
            } 
            // toggle nav country
            else if (e.target.matches(".country-btn, .country-btn *")) {
                this.view.toggleNavCountry();
            } 
            // toggle nav category dropdown
            else if (e.target.matches(".category-btn, .category-btn *")) {
                this.view.toggleNavCategory();
            }

        });
    }
}