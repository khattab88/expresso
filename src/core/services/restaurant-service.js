import Restaurant from "../entities/restaurant";
import Tag from "../entities/tag";

export default class RestaurantService {
    constructor() { }

    getById(id) {
        return this.get().find(r => r.id == id);
    }

    get() {
        return [
            new Restaurant("1", "McDonald's", "I'm lovin' it", "web_cover_Mcd.png", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("7", "Burgers"),
                new Tag("11", "Fast Food"),
                new Tag("19", "Sandwiches"),
            ]),
            new Restaurant("2", "KFC", "Finger Lickin Good", "cover_oage__2_.jpg", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("11", "Fast Food"),
                new Tag("19", "Sandwiches"),
            ]),
            new Restaurant("3", "Pizza Hut", "Makin' it great", "1900x1427.jpg", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("10", "European"),
                new Tag("11", "Fast Food"),
                new Tag("14", "Italian"),
            ]),
            new Restaurant("4", "Burger King", "Have It Your Way", "photo-1571116213508-2a5017ab1324.jpg", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("7", "Burgers"),
                new Tag("11", "Fast Food"),
                new Tag("19", "Sandwiches"),
            ]),
            new Restaurant("5", "Cook Door", "Cook Door", "rest-05.jpg", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("7", "Burgers"),
                new Tag("11", "Fast Food"),
                new Tag("19", "Sandwiches"),
            ]),
            new Restaurant("6", "Hardee's", "Chargrilled Burger", "web_hardees_Image_from_iOS.png", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("7", "Subway", "I'm lovin' it", "web_cover_Mcd.png", 30, [
                new Tag("1", "Offers"),
                new Tag("2", "American"),
                new Tag("7", "Burgers"),
                new Tag("11", "Fast Food"),
                new Tag("19", "Sandwiches"),
            ]),
            new Restaurant("8", "Papa John's", "Any time, Tea time", "rest-02.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("9", "Wendy's", "Any time, Tea time", "rest-03.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("10", "Domino's Pizza", "Any time, Tea time", "rest-04.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("11", "Dunkin' Donuts", "Any time, Tea time", "rest-05.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
            new Restaurant("12", "Hardee's", "Any time, Tea time", "rest-06.jpg", 30, [
                new Tag("1", "Beverages"),
                new Tag("2", "Coffee"),
                new Tag("3", "Desserts"),
            ]),
        ];
    }
}