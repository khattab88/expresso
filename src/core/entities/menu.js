import Entity from "./entity";

export default class Menu extends Entity {
    constructor(id, restaurantId, menuSections) {
        super(id);
        this.restaurantId = restaurantId;
        this.menuSections = menuSections;
    }
}