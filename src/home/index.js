import { handleError } from "../base";

import HomePageModel from "./model";
import { elements, HomePageView } from "./view";

export default class HomePage {
    constructor() {
        this.setupEventListeners();
    }

    init() {
        try {
            this.model = new HomePageModel();
            this.view = new HomePageView();

            this.view.renderRestaurantBigCard(this.model.restaurants[0]);
            this.view.renderRestaurantCards(this.model.restaurants.slice(1));

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {
        try {

            // initialize home page
            window.addEventListener("load", this.init);

            // navigate to restaurant menu page
            elements.showcase.addEventListener("click", e => {
                const card = e.target.closest(".restaurant-card");
                window.location.assign(`../restaurant-menu/index.html?id=${card.id}`);
            });

        } catch (err) { handleError(err); }
    }
}