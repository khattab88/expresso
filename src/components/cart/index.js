/* eslint-disable valid-jsdoc */
/* eslint-disable no-undef */
import { handleError } from "../../base";

import CartModel from "./model";
import { elements, CartView } from "./view";

import Component from "../../lib/component";
import store from "../../lib/store/index";

export default class CartComponent extends Component {
    constructor () {
        super({ store, element: document.querySelector(".cart") });

        try {
            this.init();
            this.setupEventListeners();
        } catch (err) { handleError(err); }
    }

    init () {
        this.model = new CartModel();
        this.view = new CartView();

        // this.setData();

        this.render();
    }

    setData () {
        this.model.items = this.model.getData();
        console.log(this.model);
    }

    render () {

        // console.log("cart: ", store.state.cart.items);
        // console.log("area", store.state.area.id);

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

                    this.updateCartData();
                }

                // change item count 
                if (e.target.matches(".cart__item-controls-btn, .cart__item-controls-btn *")) {
                    this.view.updateItemCount(e);

                    this.updateCartData();
                }

                // TODO: make order
                this.updateCartData();
                // this.makeOrder();
            });

        } catch (err) { handleError(err); }
    }

    // TODO
    /**
     * update store with cart data
     */
    updateCartData () {
        // 1. get cart data (all items / selected options and its count)
        // 2. save / dispatch to store (cart)
    }

}
