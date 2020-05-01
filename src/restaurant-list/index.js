/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { handleError, getQueryString } from "../base";

import RestaurantListPageModel from "./model";
import { elements, RestaurantListPageView } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";
import LocationSelectionComponent from "../components/location-selection/index";
import RestaurantSelectionComponent from "../components/restaurant-selection/index";

export default class RestaurantListPage {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        try {
            // key state 
            const area = getQueryString("area");

            // model / view
            this.model = new RestaurantListPageModel(area);
            this.model.area = area;
            this.view = new RestaurantListPageView();

            // components
            this.navbar = new NavComponent();
            this.footer = new FooterComponent();
            this.locationSelection = new LocationSelectionComponent();
            this.restaurantSelection = new RestaurantSelectionComponent();

            // rendering
            this.displayList();
            this.displayTags();

        } catch (err) { handleError(err); }
    }

    changeArea (area) {
        this.model.area = area;

        this.displayList();
    }

    displayList () {

        // show/hide empty list template
        if (this.model.filteredList.length === 0 || this.model.restaurants.length === 0) {
            this.view.displayEmptyTemplate(true);
        } else {
            this.view.displayEmptyTemplate(false);
        }

        this.view.clearList();
        this.model.filteredList.forEach(r => this.view.renderBranchCard(r));
    }

    displayTags () {
        this.model.tags.forEach(t => this.view.renderTag(t));
    }

    filterByTags () {
        let filtered = new Set();

        if (this.model.selecedTags.length > 0) {
            this.model.selecedTags.forEach(t => {
                // loop over list
                this.model.restaurants.forEach(r => {
                    // eslint-disable-next-line no-shadow
                    const tags = r.restaurant.tags.map(t => t.id);

                    if (tags.indexOf(t) > -1) {
                        filtered.add(r);
                    }
                });
            });

            // update filtered list
            this.model.filteredList = [...filtered];
        } else {
            this.model.filteredList = this.model.restaurants;
        }

        // display filtered list
        this.displayList();
    }

    filterBySpecialOffers (checked) {
        this.model.filteredList = checked 
            ? this.model.filteredList.filter(r => r.restaurant.specialOffers === true)
            : this.model.restaurants; 

        this.displayList();
    }

    setupEventListeners () {
        try {

            elements.filterDropdownHead.addEventListener("click", e => { this.view.toggleFilterDropdown(); });

            elements.restaurantList.addEventListener("click", e => { this.view.navigateToMenu(e); });


            elements.filterCuisineList.addEventListener("change", e => {

                const tag = this.view.selectTag(e);
                const tagIndex = this.model.selecedTags.indexOf(tag.id);

                if (tag.checked) {
                    if (tagIndex < 0) {
                        this.model.selecedTags.push(tag.id);
                    }
                } else {
                    if (tagIndex >= 0) {
                        this.model.selecedTags.splice(tagIndex, 1);
                    }
                }

                this.view.displayTagFilterStatus(this.model.selecedTags.length);

                // filter list based on selected tags
                this.filterByTags();

            });

            // clear tags filter
            elements.filterClear.addEventListener("click", e => {
                this.model.selecedTags = [];
                this.view.clearTagFilter();
                this.model.filteredList = this.model.restaurants;
                this.displayList();
            });

            elements.specialOffersCheckbox.addEventListener("change", e => {
                const checked = e.target.checked;
                
                this.filterBySpecialOffers(checked);
            });

        }
        catch (err) { console.log(err); }
    }

}
