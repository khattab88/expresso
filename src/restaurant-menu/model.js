import MenuCategory from "../core/entities/menuCategory";
import MenuItem from "../core/entities/menuItem";

export default class RestaurantMenuPageModel {
    constructor() {
        this.menuCategories = this.getMenuCategories();
    }    

    getMenuCategories() {
        return [
            new MenuCategory("1", "Sandwiches", this.getMenuItems()),
            new MenuCategory("2", "Sides", this.getMenuItems()),
            new MenuCategory("3", "Beverages", this.getMenuItems()),
            new MenuCategory("4", "Salads", this.getMenuItems()),
            new MenuCategory("5", "Specialities", this.getMenuItems()),
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