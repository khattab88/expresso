/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-undef */
import { handleError } from "../../base";

import CartModel from "./model";
import { elements, CartView } from "./view";

import Component from "../../lib/component";
import store from "../../lib/store/index";

export default class CartComponent extends Component {
    constructor (branchId) {
        super({ store, element: document.querySelector(".cart") });

        try {
            this.branchId = branchId;
            this.init();
            this.setupEventListeners();
        } catch (err) { handleError(err); }
    }

    init () {
        this.model = new CartModel(this.branchId);
        this.view = new CartView();

        this.render();
    }

    setData () {
        this.model.items = this.model.getData();
        console.log(this.model);
    }

    render () {

        this.model.items = store.state.cart.items;
        const items = store.state.cart.items;

        if (items.length < 1) {
            this.view.showEmptyTemplate();
        } 
        else {
            this.view.hideEmptyTemplate();

            this.view.renderItems(items);

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

            // make order
            document.querySelector(".cart").addEventListener("click", e => {
                e.stopPropagation();

                if (e.target.matches(".cart__submit, .cart__submit *")) {
                    this.makeOrder();
                }
            });

        } catch (err) { handleError(err); }
    }

    makeOrder () {
        console.log("make order");

        // 1. get cart data (all items / selected options and its count)
        const cart = this.view.getItems();

        console.log(cart);

        // 2. save / dispatch to store (cart)
    }

}
