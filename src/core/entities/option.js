import Entity from "./entity";

export default class Option extends Entity {
    constructor (id, itemId, type, name, optionItems = []) {
        super(id);
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.optionItems = optionItems;
    }
}
