import Entity from "./entity";

export default class Branch extends Entity {
    constructor(id, name, restaurant, area) {
        super(id);
        this.name = name;
        this.restaurant = restaurant;
        this.area = area;
    }
}