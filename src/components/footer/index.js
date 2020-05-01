import { elements, FooterView } from "./view";

export default class FooterComponent {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        this.view = new FooterView();
        this.view.render();
    }

    setupEventListeners () {
    
        elements.container.addEventListener("click", e => {

            if (e.target.matches(".change-country__btn, .change-country__btn *")) {
                this.view.toggleCountryDropdown();
            }
        });

    }
}
 
