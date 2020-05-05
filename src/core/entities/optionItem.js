import Entity from "./entity";

export default class OptionItem extends Entity {
    constructor (id, optionId, name, price) {
        super(id);
        this.optionId = optionId;
        this.name = name;
        this.price = price;
    }
}
