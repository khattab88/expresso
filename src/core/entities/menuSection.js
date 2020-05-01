import Entity from "./entity";

export default class MenuSection extends Entity {
    constructor (id, name, menuId, menuItems) {
        super(id);
        this.name = name;
        this.menuId = menuId;
        this.menuItems = menuItems;
    }
}
