/* eslint-disable prefer-template */
/* eslint-disable class-methods-use-this */
import Tag from "../entities/tag";
import { config } from "../../config"; 

import axios from "axios";

export default class TagService {
    constructor () {}

    async getAsync () {
        const response = await axios.get(config.apiUrl + "tags");

        const data = response.data;

        const tags = [];

        data.forEach(t => {
            tags.push(new Tag(t.id, t.title));
        });

        return tags;
    }

    get () {
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
            new Tag("22", "Vegan")
        ];
    }
}
