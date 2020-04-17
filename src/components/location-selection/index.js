import { handleError } from "../../base";

import LocationSelectionModel from "./model";
import { elements, LocationSelectionView } from "./view";

export default class LocationSelectionComponent {
    constructor() {
        this.init();
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

            elements.wrapper.addEventListener("click", e => {

                if(e.target.matches(".location-selection__btn, .location-selection__btn *")) {
                    this.view.toggle(e);
                }
                else if(e.target.matches(".location-selection__area, .location-selection__area *")) {
                    this.view.select(e);
                }

            });

        }
        catch (err) { handleError(err); }
    }
}