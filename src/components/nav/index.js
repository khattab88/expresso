/* eslint-disable no-undef */
import { elements, NavView } from "./view";

export default class NavComponent {

    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        this.view = new NavView();
        this.view.render();
    }

    setupEventListeners () {

        elements.container.addEventListener("click", e => {

            if (e.target.matches(".navbar__toggle, .navbar__toggle *")) {
                this.view.toggleMobileNav();
            } 
            else if (e.target.matches(".country-btn, .country-btn *")) {
                this.view.toggleNavCountry();
            } 
            else if (e.target.matches(".category-btn, .category-btn *")) {
                this.view.toggleNavCategory();
            }

        });

        // transparent navbar on scroll
        if (window.innerWidth >= 1024) {
            window.addEventListener("scroll", _.throttle(this.scroll, 1000));
        }
    }

    scroll () {
        const navbar = document.querySelector(".navbar");
        const scrollY = window.scrollY;

        // console.log("scrollY", scrollY);

        if (scrollY < 80) {
            navbar.style.backgroundColor = "transparent";
        } else {
            navbar.style.backgroundColor = "#009a9a";
        }
    }
}
