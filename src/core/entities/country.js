import Entity from "./entity";

export default class Country extends Entity {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}