import Restaurant from "../../core/entities/restaurant";

export default class RestaurantSelectionModel {
    constructor() {
        this.restaurants = this.getRestaurants();
        this.selectedRestaurant = null;
    }

    getRestaurants() {
        return [
            new Restaurant("1", "McDonald's"),
            new Restaurant("2", "KFC"),
            new Restaurant("3", "Pizza Hut"),
            new Restaurant("4", "Burger King"),
            new Restaurant("5", "Cook Door"),
            new Restaurant("6", "Hardee's"),
            new Restaurant("7", "Papa John's"),
            new Restaurant("8", "Wendy's"),
            new Restaurant("9", "Domino's Pizza"),
            new Restaurant("10", "Dunkin' Donuts"),
            new Restaurant("11", "Subway"),
        ];
    }
}