import { handleError } from "../../base";

import RestaurantSelectionModel from "./model";
import { elements, RestaurantSelectionView } from "./view";

export default class RestaurantSelectionComponent {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {
            this.model = new RestaurantSelectionModel();
            this.view = new RestaurantSelectionView();

            this.view.render(this.model.restaurants);

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {
        try {

            elements.wrapper.addEventListener("click", e => {

                const restaurantSelection = e.target.closest(".restaurant-selection");
                const btn = restaurantSelection.querySelector(".restaurant-selection__btn");
                const box = restaurantSelection.querySelector(".restaurant-selection__box");
                const value = restaurantSelection.querySelector(".restaurant-selection__value");

                // toggle header selection
                if(e.target.matches(".restaurant-selection__btn, .restaurant-selection__btn *")) {
                    btn.classList.toggle("restaurant-selection__btn--open");
                    box.classList.toggle("restaurant-selection__box--open");
                }

                // display selected value
                else if(e.target.matches(".restaurant-selection__restaurant, .restaurant-selection__restaurant *")) {
                    const restaurant = e.target.textContent;
                    value.textContent = restaurant;

                    btn.classList.toggle("restaurant-selection__btn--open");
                    box.classList.toggle("restaurant-selection__box--open");
                }

            });

        } catch(err) { handleError(err); }
    }
}