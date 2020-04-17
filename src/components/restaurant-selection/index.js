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

                if(e.target.matches(".restaurant-selection__btn, .restaurant-selection__btn *")) {
                    this.view.toggle(e);
                }
                else if(e.target.matches(".restaurant-selection__restaurant, .restaurant-selection__restaurant *")) {
                    this.view.select(e);
                }

            });

        } catch(err) { handleError(err); }
    }
}