import { handleError } from "../../base";

import { elements } from "./view";

export default class HeaderComponent {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        try {


            // toggle header restaurant selection
            elements.restaurantSelectionBtn.addEventListener("click", e => {
                elements.restaurantSelectionBtn.classList.toggle("restaurant-selection__btn--open");
                elements.restaurantSelectionBox.classList.toggle("restaurant-selection__box--open");
            });

            // display restaurant location value
            elements.restaurantList.addEventListener("click", e => {
                const area = e.target.textContent;
                elements.restaurantValue.textContent = area;
                elements.restaurantSelectionBtn.classList.toggle("restaurant-selection__btn--open");
                elements.restaurantSelectionBox.classList.toggle("restaurant-selection__box--open");
            });

        } catch (err) { handleError(err); }
    }
}