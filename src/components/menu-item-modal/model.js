/* eslint-disable no-undef */
import ItemService from "../../core/services/item-service";

export default class ItemModalModel {
    constructor () {
        this.itemService = new ItemService();
    }

    setItem (id) {
        this.item = this.itemService.getById(id);
    }
}
