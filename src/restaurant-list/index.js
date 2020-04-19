import { handleError } from "../base";

import RestaurantListPageModel from "./model";
import { elements, RestaurantListPageView } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";
import LocationSelectionComponent from "../components/location-selection/index";
import RestaurantSelectionComponent from "../components/restaurant-selection/index";

export default class RestaurantListPage {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {
            this.model = new RestaurantListPageModel();
            this.view = new RestaurantListPageView();

            this.navbar = new NavComponent();
            this.footer = new FooterComponent();
            this.locationSelection = new LocationSelectionComponent();
            this.restaurantSelection = new RestaurantSelectionComponent();

            this.model.restaurants.forEach(r => this.view.renderRestaurantCard(r));
            this.model.tags.forEach(t => this.view.renderTag(t));

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {
        try {

            elements.filterDropdownHead.addEventListener("click", e => {
                this.view.toggleFilterDropdown();
            });

            elements.restaurantList.addEventListener("click", e => {
                this.view.navigateToMenu(e);
            });


            elements.filterCuisineList.addEventListener("change", e => {

                const tag = this.view.selectTag(e);
                const tagIndex = this.model.selecedTags.indexOf(tag.id);

                if(tag.checked) {
                    if(tagIndex < 0) {
                        this.model.selecedTags.push(tag.id);
                    }
                } else {
                    if(tagIndex >= 0) {
                        this.model.selecedTags.splice(tagIndex, 1);
                    }
                }

                this.view.displayTagFilterStatus(this.model.selecedTags.length);
            });

            elements.filterClear.addEventListener("click", e => {
                this.model.selecedTags = [];
                this.view.clearTagFilter();
            });

        }
        catch (err) { console.log(err); }
    }

}