import Entity from "./entity";

export default class MenuItem extends Entity {
    constructor (id, name, image, price, desc) {
        super(id);
        this.name = name;
        this.image = image;
        this.price = price;
        this.desc = desc;
    }
}
