/* eslint-disable class-methods-use-this */
import Restaurant from "../core/entities/restaurant";

export default class HomePageModel {
    constructor () {
        this.restaurants = this.getRestaurants();
    }

    getRestaurants () {
        return [
            new Restaurant("1", "Wrap It", "Tasty and fresh food", "rest-01.jpg", 30),
            new Restaurant("2", "Wrap It", "Tasty and fresh food", "rest-02.jpg", 30),
            new Restaurant("3", "Wrap It", "Tasty and fresh food", "rest-03.jpg", 30),
            new Restaurant("4", "Wrap It", "Tasty and fresh food", "rest-04.jpg", 30),
            new Restaurant("5", "Wrap It", "Tasty and fresh food", "rest-05.jpg", 30),
            new Restaurant("6", "Wrap It", "Tasty and fresh food", "rest-06.jpg", 30),
            new Restaurant("7", "Wrap It", "Tasty and fresh food", "rest-07.jpg", 30)
        ];
    }
}
