import Entity from "./entity";

export default class City extends Entity {
    constructor(id, name, country, areas) {
        super(id);
        this.name = name;
        this.country = country;
        this.areas = areas;
    }
}