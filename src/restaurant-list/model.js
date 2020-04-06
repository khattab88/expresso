import Restaurant from "../core/entities/restaurant";
import Tag from "../core/entities/tag";

export default class RestaurantListPageModel {
    constructor() {
        this.restaurants = this.getRestaurants();
        this.tags = this.getTags();
    }

    getRestaurants() {

        return [
            new Restaurant("1", "Tea Time", "Any time, Tea time", "rest-01.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("2", "Tea Time", "Any time, Tea time", "rest-02.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("3", "Tea Time", "Any time, Tea time", "rest-03.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("4", "Tea Time", "Any time, Tea time", "rest-04.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("5", "Tea Time", "Any time, Tea time", "rest-05.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("6", "Tea Time", "Any time, Tea time", "rest-06.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
        ];
    }

    getTags() {
        return [
            new Tag("1", "Offers"),
            new Tag("2", "American"),
            new Tag("3", "Arabic"),
            new Tag("4", "Asian"),
            new Tag("5", "Bakery"),
            new Tag("6", "Beverages"),
            new Tag("7", "Burgers"),
            new Tag("8", "Coffee"),
            new Tag("9", "Desserts"),
            new Tag("10", "European"),
            new Tag("11", "Fast Food"),
            new Tag("12", "Healthy"),
            new Tag("13", "Indian"),
            new Tag("14", "Italian"),
            new Tag("15", "Latin"),
            new Tag("16", "Middle Eastern"),
            new Tag("17", "Pizza"),
            new Tag("18", "Salads"),
            new Tag("19", "Sandwiches"),
            new Tag("20", "Sea Food"),
            new Tag("21", "Turkish"),
            new Tag("22", "Vegan"),
        ];
    }
}