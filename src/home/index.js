import { handleError } from "../base";

import HomePageModel from "./model";
import { elements, HomePageView } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";
import LocationSelectionComponent from "../components/location-selection/index";

export default class HomePage {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {
            // initialize model/view instances
            this.model = new HomePageModel();
            this.view = new HomePageView();

            // initialize components
            this.navbar = new NavComponent();
            this.footer = new FooterComponent();
            this.locationSelection = new LocationSelectionComponent();

            // intial rendering
            this.view.renderRestaurantBigCard(this.model.restaurants[0]);
            this.view.renderRestaurantCards(this.model.restaurants.slice(1));

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {
        try {
            // navigate to restaurant menu page
            elements.showcase.addEventListener("click", e => {
                const card = e.target.closest(".restaurant-card");
                this.view.navigate(`../restaurant-menu/index.html?id=${card.id}`);
            });

        } catch (err) { handleError(err); }
    }
}