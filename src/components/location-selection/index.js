/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-negated-condition */
/* eslint-disable newline-after-var */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import { handleError, getQueryString, setQueryString } from "../../base";
import Utils from "../../lib/utils";

import LocationSelectionModel from "./model";
import { elements, LocationSelectionView } from "./view";

export default class LocationSelectionComponent {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        try {
            this.model = new LocationSelectionModel(area);
            this.view = new LocationSelectionView();

            this.view.render(this.model.cities);

            const areaId = getQueryString("area");
            const area = this.model.getArea(areaId);

            this.view.displayArea(area);

        } catch (err) { handleError(err); }
    }

    setupEventListeners () {
        try {

            elements.wrapper.addEventListener("click", e => {

                // toggle
                if (e.target.matches(".location-selection__btn, .location-selection__btn *")) {
                    this.view.toggle(e);
                }
                // selection
                else if (e.target.matches(".location-selection__area, .location-selection__area *")) {

                    // add area query string and reload
                    setQueryString("area", e.target.id);

                    this.view.select(e);
                }
            });

            // search
            document.querySelector(".location-selection__input").addEventListener("input", e => {
                const value = e.target.value;

                const list = document.querySelector(".location-selection__city-list");
                list.innerHTML = "";
                
                let filtered = [];

                this.model.cities.forEach(city => {
                    city.areas.forEach(area => {
                        if (area.name.toLowerCase().includes(value.toLowerCase())) {
                            area.cityId = city.id;
                            area.cityName = city.name;
                            filtered.push(area);
                        }
                    });
                });

               
                filtered = Utils.groupBy(filtered, area => area.cityId);
                
                const final = [];
                for (const group in filtered) {

                    const areas = filtered[group].map(g => {
                        const area = {};
                        area.id = g.id;
                        area.name = g.name;

                        return area;
                    });

                    const city = {};
                    city.id = filtered[group][0].cityId;
                    city.name = filtered[group][0].cityName;

                    city.areas = areas;

                    final.push(city);
                }

                if (final.length === 0) {
                    list.innerHTML = this.view.createEmptyResult();
                } else {
                    list.innerHTML = final.map(city => this.view.createCity(city)).join("");
                }

            });

        }
        catch (err) { handleError(err); }
    }
}
