import { handleError, getQueryString } from "../../base";

import RestaurantSelectionModel from "./model";
import { elements, RestaurantSelectionView } from "./view";

import BranchService from "../../core/services/branch-service";

export default class RestaurantSelectionComponent {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        try {
            const area = getQueryString("area");

            this.model = new RestaurantSelectionModel(area);
            this.view = new RestaurantSelectionView();

            // Dependency
            this.branchService = new BranchService();

            this.changeArea(area);

        } catch (err) { handleError(err); }
    }

    changeArea (area) {
        this.model.area = area;
        const areaBranches = this.model.getAreaBranches(area);

        this.view.render(areaBranches);
    }

    setupEventListeners () {
        try {

            elements.wrapper.addEventListener("click", e => {

                if (e.target.matches(".restaurant-selection__btn, .restaurant-selection__btn *")) {
                    this.view.toggle(e);
                }
                else if (e.target.matches(".restaurant-selection__restaurant, .restaurant-selection__restaurant *")) {
                    this.view.select(e);
                }

            });

        } catch (err) { handleError(err); }
    }
}
