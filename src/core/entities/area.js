import Entity from "./entity";

export default class Area extends Entity {
    constructor(id, name, cityId = 0) {
        super(id);
        this.name = name;
    }
}