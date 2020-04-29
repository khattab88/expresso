import MenuSection from "../core/entities/menuSection";
import MenuItem from "../core/entities/menuItem";

import BranchService from "../core/services/branch-service";

export default class RestaurantMenuPageModel {
    constructor(branchId) {
        this.branchId = branchId;

        this.branchService = new BranchService();

        this.branchInfo = this.getBranchInfo();
        this.menuSections = this.getMenuSections();
        this.menuItems = this.getMenuItems();
    }    

    getBranchInfo() {
        return this.branchService.getById(this.branchId);
    }

    getMenuSections() {
        return [
            new MenuSection("1", "Sandwiches", "1", this.getMenuItems()),
            new MenuSection("2", "Sides", "1", this.getMenuItems()),
            new MenuSection("3", "Beverages", "1", this.getMenuItems()),
            new MenuSection("4", "Salads", "1", this.getMenuItems()),
            new MenuSection("5", "Specialities", "1", this.getMenuItems()),
        ];
    }

    getMenuItems() {
        return [
            new MenuItem("1", "Double Cheese Burger", "photo-1549611016-3a70d82b5040.jpg", 70, 
            "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."),

            new MenuItem("2", "Double Cheese Burger", "photo-1549611016-3a70d82b5040.jpg", 70, 
            "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey..."),
        ];
    }
}