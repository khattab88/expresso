import BranchService from "../../core/services/branch-service";


export default class RestaurantSelectionModel {
    constructor (area) {
        // dependency
        this.branchService = new BranchService();

        this.area = area;
        this.branches = this.getAreaBranches(this.area);
        this.selectedRestaurant = null;
    }

    getAreaBranches (area) {
        return this.branchService.getByArea(area);
    }
}
