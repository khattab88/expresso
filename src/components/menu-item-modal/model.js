/* eslint-disable no-negated-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import ItemService from "../../core/services/item-service";

export default class ItemModalModel {
    constructor () {
        this.itemService = new ItemService();
    }

    setItem (id) {
        this.item = this.itemService.getById(id);
    }

    addToCart (cartData) {
        let cart = JSON.parse(sessionStorage.getItem("expresso_cart"));

        if (!cart) {
            cart = { details: [] };
        }

        cart.details.push(cartData);
        sessionStorage.setItem("expresso_cart", JSON.stringify(cart));
    }
}
