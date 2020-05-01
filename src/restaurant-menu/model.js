/* eslint-disable no-unused-vars */
import MenuSection from "../core/entities/menuSection";
import MenuItem from "../core/entities/menuItem";

import BranchService from "../core/services/branch-service";
import MenuService from "../core/services/menu-service";

export default class RestaurantMenuPageModel {
    constructor (branchId) {
        this.branchId = branchId;

        this.branchService = new BranchService();
        this.menuService = new MenuService();

        this.branchInfo = this.getBranchInfo();
        this.menu = this.getMenu();
    }    

    getBranchInfo () {
        return this.branchService.getById(this.branchId);
    }

    getMenu () {
        return this.menuService.getById("1");
    }
}
