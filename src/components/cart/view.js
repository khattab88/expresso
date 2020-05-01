/* eslint-disable no-undef */
import CartItem from "../../core/entities/cartItem";

import { formatCurrency } from "../../base";

export const elements = {
    cartItems: document.querySelector(".cart__items"),
    item: document.querySelector(".cart__item"),
    itemName: document.querySelector(".cart__item-name"),
    itemPrice: document.querySelector(".cart__item-price"),
    itemControls: document.querySelector(".cart__item-controls-count"),
    subTotal: document.querySelector(".cart__pricing-box-subtotal .cart__pricing-box__value"),
    deliveryFee: document.querySelector(".cart__pricing-box-delivery .cart__pricing-box__value"),
    total: document.querySelector(".cart__pricing-box-total .cart__pricing-box__value")
};

export class CartView {
    constructor () { }

    removeItem (e) {
        const item = e.target.closest(".cart__item-controls-remove").closest(".cart__item");

        if (item) {
            item.parentNode.removeChild(item);
        }
    }

    updateItemCount (e) {
        const op = e.target.textContent;
        const countLabel = e.target.parentElement.querySelector(".cart__item-controls-count");

        let count = parseInt(countLabel.textContent);

        if (op === "+") { count++; }
        else {
            if (count > 1) { count--; }
        }

        countLabel.textContent = count;
    }

    getItems () {
        let id = 0;
        let items = [];

        Array.from(document.querySelectorAll(".cart__item")).
            forEach(item => {
                const name = item.querySelector(".cart__item-name").textContent;
                const price = parseInt(item.querySelector(".cart__item-price").textContent.split(".")[0]);
                const count = parseInt(item.querySelector(".cart__item-controls-count").textContent);

                items.push(new CartItem(id++, name, price, count));
            });

        return items;
    }

    displayInfo (subTotal, deliveryFee, total) {
        elements.subTotal.textContent = formatCurrency(subTotal);
        elements.deliveryFee.textContent = formatCurrency(deliveryFee);
        elements.total.textContent = formatCurrency(total); 
    }
}
