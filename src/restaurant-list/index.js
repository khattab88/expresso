import { handleError, getArea } from "../base";

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
            // key state 
            const area = getArea();

            // model / view
            this.model = new RestaurantListPageModel(area);
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

    changeArea(area) {
        this.model.area = area;

        this.displayList();
    } 

    displayList() {

        // show/hide empty list template
        if(this.model.restaurants === 0) {
            this.view.displayEmptyTemplate(false);
        } else {
            this.view.displayEmptyTemplate(true);
        }

        this.model.restaurants.forEach(r => this.view.renderBranchCard(r));
    }

    displayTags() {
        this.model.tags.forEach(t => this.view.renderTag(t));
    }

    setupEventListeners() {
        try {

            elements.filterDropdownHead.addEventListener("click", e => { this.view.toggleFilterDropdown(); });

            elements.restaurantList.addEventListener("click", e => { this.view.navigateToMenu(e); });


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