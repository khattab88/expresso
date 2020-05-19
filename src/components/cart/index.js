/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable valid-jsdoc */
/* eslint-disable no-undef */
import { handleError } from "../../base";

import CartModel from "./model";
import { elements, CartView } from "./view";

import Component from "../../lib/component";
import store from "../../lib/store/index";

import Utils from "../../lib/utils";

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

        console.log("items:", items);

        if (items.length < 1) {
            this.view.showEmptyTemplate();
        }
        else {
            this.view.hideEmptyTemplate();

            this.view.renderItems(items);

            const info = {
                subTotal: this.model.getSubTotal(items),
                deliveryFee: this.model.getDeliveryFee(),
                // total: this.model.getTotal(items)
                total: this.model.getSubTotal(items) + this.model.getDeliveryFee()
            };

            this.view.displayInfo(info.subTotal, info.deliveryFee, info.total);
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
                    const count = this.view.updateItemCount(e);

                    const id = e.target.closest(".cart__item").dataset.itemId;
                    
                    const item = store.state.cart.items.find(i => i.itemId === id);
                    
                    e.target.closest(".cart__item").querySelector(".cart__item-price").textContent = Utils.formatCurrency(count * (item.itemPrice + item.optionsTotal));
                }

                // update cart
                const items = this.updateCartData().items;

                const subTotal = this.model.getSubTotal(items);

                // display updated cart
                const info = {
                    subTotal: subTotal,
                    deliveryFee: this.model.getDeliveryFee(),
                    total: subTotal + this.model.getDeliveryFee()
                };

                this.view.displayInfo(info.subTotal, info.deliveryFee, info.total);
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

    updateCartData () {
        const itemsMap = this.view.getItems();

        let items = [];

        for (const [id, count] of itemsMap) {
            let item = store.state.cart.items.find(i => i.itemId === id);

            item.count = count;

            items.push(item);
        }

        return {
            branchId: this.branchId,
            items: items,
            subTotal: this.model.getSubTotal(items),
            deliveryFee: this.model.getDeliveryFee(),
            total: this.model.getTotal(items)
        };
    }

    makeOrder () {
        console.log("make order");

        // 1. get cart data (all items / selected options and its count)
        const cart = this.updateCartData();

        console.log(cart);

        // 2. save / dispatch to store (cart)
        store.dispatch("makeOrder", cart);
    }

}
