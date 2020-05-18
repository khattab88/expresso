/* eslint-disable max-len */
import Entity from "./entity";

export default class Restaurant extends Entity {
    constructor (id, name, slogan, image, deliveryTime, deliveryFee, tags, specialOffers = false) {
        super(id);
        this.name = name;
        this.slogan = slogan;
        this.image = image;
        this.deliveryTime = deliveryTime;
        this.deliveryFee = deliveryFee;
        this.tags = tags;
        this.specialOffers = specialOffers;
    }
}
