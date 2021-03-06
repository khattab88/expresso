import CityService from "../../core/services/city-service";
import AreaService from "../../core/services/area-service";

export default class LocationSelectionModel {
    constructor (area) {
        // Dependency
        this.cityService = new CityService();
        this.areaService = new AreaService();

        this.area = area;

        this.cities = this.getCitites();
        this.selectedArea = null;
    }

    getCitites () {
        return this.cityService.get();
    }

    getArea (areaId) {
        return this.areaService.getById(areaId);
    }
}
