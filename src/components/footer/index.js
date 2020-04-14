 import { elements, FooterView } from "./view";

 export default class FooterComponent {
    constructor() {
        this.setupEventListeners();
    }

    init() {
        this.view = new FooterView();

        this.view.render();
    }

    setupEventListeners() {
        
        window.addEventListener("load", this.init);

        elements.container.addEventListener("click", e => {

            // toggle footer country
            if(e.target.matches(".change-country__btn, .change-country__btn *")) {
                const footerCountryBtn = elements.container.querySelector(".change-country__btn");
                footerCountryBtn.classList.toggle("change-country__btn--open");

                const footerCountryDropdown = elements.container.querySelector(".change-country__btn > .country-dropdown");
                footerCountryDropdown.classList.toggle("country-dropdown--open");
            }
        });

    }
 }
 