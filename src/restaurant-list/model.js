import BranchService from "../core/services/branch-service";
import TagService from "../core/services/tag-service";

export default class RestaurantListPageModel {
    constructor(area) {
        // Dependencies
        this.branchService = new BranchService();
        this.tagService = new TagService();

        this.area = area;        
        this.restaurants = this.getRestaurants();
        this.tags = this.getTags();
        this.selecedTags = (() => [])();
    }

    getRestaurants() {
        return this.branchService.getByArea(this.area);
    }

    getTags() {
        return this.tagService.get();
    }
}