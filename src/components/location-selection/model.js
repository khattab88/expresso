import CityService from "../../core/services/city-service";

export default class LocationSelectionModel {
    constructor() {
        // Dependency
        this.cityService = new CityService();

        this.cities = this.getCitites();
        this.selectedArea = null;
    }

    getCitites() {
        return this.cityService.get();
    }
}