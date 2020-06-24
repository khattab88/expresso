/* eslint-disable no-undef */
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

                // toggle
                if (e.target.matches(".restaurant-selection__btn, .restaurant-selection__btn *")) {
                    this.view.toggle(e);
                }
                // selection
                else if (e.target.matches(".restaurant-selection__restaurant, .restaurant-selection__restaurant *")) {
                    this.view.select(e);
                }

            });

            // search
            document.querySelector(".restaurant-selection__input").addEventListener("input", e => {
                const value = e.target.value;

                this.search(value);
            });

        } catch (err) { handleError(err); }
    }

    search (value) {
        const list = document.querySelector(".restaurant-selection__restaurant-list");

        list.innerHTML = "";
        
        const filtered = this.model.branches.filter(branch => branch.restaurant.name.toLowerCase().includes(value.toLowerCase()));
        
        // console.log(filtered);

        if (filtered.length === 0) {
            list.innerHTML = this.view.createEmptyResult();
        } else {
            list.innerHTML = filtered.map(branch => this.view.createBranch(branch)).join("");
        }
    }
}
