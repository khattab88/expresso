import { handleError } from "../../base";

import LocationSelectionModel from "./model";
import { elements, LocationSelectionView } from "./view";

export default class LocationSelectionComponent {
    constructor() {
        this.setupEventListeners();
    }

    init() {
        try {
            this.model = new LocationSelectionModel();
            this.view = new LocationSelectionView();

            this.view.render(this.model.cities);

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {
        try {

            // initialize location selection componenet
            window.addEventListener("load", this.init);


            elements.wrapper.addEventListener("click", e => {

                const locationSelection = e.target.closest(".location-selection");
                const btn = locationSelection.querySelector(".location-selection__btn");
                const box = locationSelection.querySelector(".location-selection__box");
                const value = locationSelection.querySelector(".location-selection__value");

                // toggle header location selection
                if(e.target.matches(".location-selection__btn, .location-selection__btn *")) {
                    btn.classList.toggle("location-selection__btn--open");
                    box.classList.toggle("location-selection__box--open");

                }

                // display selected location value
                else if(e.target.matches(".location-selection__area, location-selection__area *")) {
                    const area = e.target.textContent;
                    value.textContent = area;

                    btn.classList.toggle("location-selection__btn--open");
                    box.classList.toggle("location-selection__box--open");
                }

            });

        }
        catch (err) { handleError(err); }
    }
}