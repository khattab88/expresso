import Entity from "./entity";

export default class Area extends Entity {
    // eslint-disable-next-line no-unused-vars
    constructor (id, name, cityId = 0) {
        super(id);
        this.name = name;
    }
}