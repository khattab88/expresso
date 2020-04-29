export default class Restaurant {

    constructor(id, name, slogan, image, deliveryTime, tags, specialOffers = false) {
        this.id = id;
        this.name = name;
        this.slogan = slogan;
        this.image = image;
        this.deliveryTime = deliveryTime;
        this.tags = tags;
        this.specialOffers = specialOffers;
    }
    
}