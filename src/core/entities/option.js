import Entity from "./entity";

export default class Option extends Entity {
    constructor (id, itemId, type, name, items = []) {
        super(id);
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.items = items;
    }
}
