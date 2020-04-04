 import { elements } from "./view";

 export default class FooterComponent {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        
        // toggle footer country
        elements.footerCountryBtn.addEventListener("click", e => {
            elements.footerCountryBtn.classList.toggle("change-country__btn--open");
            elements.footerCountryDropdown.classList.toggle("country-dropdown--open");
        });

    }
 }
 