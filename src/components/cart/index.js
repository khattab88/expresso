/* eslint-disable no-undef */
import { handleError } from "../../base";

import CartModel from "./model";
import { elements, CartView } from "./view";

export default class CartComponent {
    constructor () {
        try {
            this.init();
            this.setupEventListeners();
        } catch (err) { handleError(err); }
    }

    init () {
        this.model = new CartModel();
        this.view = new CartView();

        this.setData();

        this.display();
    }

    setData () {
        this.model.items = this.model.getData();
        console.log(this.model);
    }

    display () {
        if (this.model.empty) {
            this.view.showEmptyTemplate();
        } 
        else {
            this.view.hideEmptyTemplate();

            this.view.renderItems(this.model.items);

            this.view.displayInfo(
                this.model.getSubTotal(),
                this.model.getDeliveryFee(),
                this.model.getTotal()
            );
        }
    }

    setupEventListeners () {
        try {

            elements.cartItems.addEventListener("click", e => {

                // remove item row from cart
                if (e.target.matches(".cart__item-controls-remove, .cart__item-controls-remove *")) {
                    this.view.removeItem(e);
                }

                // change item count 
                if (e.target.matches(".cart__item-controls-btn, .cart__item-controls-btn *")) {
                    this.view.updateItemCount(e);
                }

            });

        } catch (err) { handleError(err); }
    }

}
