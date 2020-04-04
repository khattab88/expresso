import { elements } from "./view";

export default class HeaderComponent {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        
        // toggle header location selection
        elements.locationSelectionBtn.addEventListener("click", e => {
            elements.locationSelectionBtn.classList.toggle("location-selection__btn--open");
            elements.locationSelectionBox.classList.toggle("location-selection__box--open");
        });

        // display selected location value
        elements.locationList.addEventListener("click", e => {
            const area = e.target.textContent;
            elements.locationValue.textContent = area;
            elements.locationSelectionBtn.classList.toggle("location-selection__btn--open");
            elements.locationSelectionBox.classList.toggle("location-selection__box--open");
        });

    }
}