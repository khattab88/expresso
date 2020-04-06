export default class RestaurantListPageModel {
    constructor() {
        this.restaurants = [];
        this.restaurants = this.getRestaurants();
    }

    getRestaurants() {

        return [
            {
                id: "1",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-01.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "2",
                name: "Coffee Time",
                slogan: "Any time, Coffee time",
                image: "rest-02.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "3",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-03.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "4",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-04.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "5",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-05.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "6",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-06.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
            {
                id: "7",
                name: "Tea Time",
                slogan: "Any time, Tea time",
                image: "rest-07.jpg",
                deliveryTime: 30,
                tags: [
                    { id: 1, title: "Beverages" },
                    { id: 2, title: "Coffee" },
                    { id: 3, title: "Desserts" },
                ]
            },
        ];
    }
}