/* eslint-disable lines-around-comment */
/* eslint-disable multiline-ternary */
/* eslint-disable no-extra-parens */
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

    renderItems (items) {
        const markup = items.map(item => this.createItem(item)).join("");

        elements.cartItems.innerHTML = markup;
    }

    createItem (cartItem) {

        return `
        <article class="cart__item" data-item-id="${cartItem.itemId}">
            <div class="cart__item-detail">
                <p class="cart__item-name">${cartItem.itemName}</p>
                <p class="cart__item-price">${cartItem.itemPrice}.00 EGP</p>
            </div>

            <div class="cart__item-options">
                ${cartItem.options.map(opt => this.renderItemOption(opt)).join("")}
            </div> 

            ${this.renderNotes(cartItem.notes)}

            <div class="cart__item-controls">
                <div class="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                <p class="cart__item-controls-count">${cartItem.count}</p>
                <div class="cart__item-controls-btn cart__item-controls-btn-add">+</div>
                <a class="cart__item-controls-remove" rel="nofollow">
                    <span>x</span>
                </a>
            </div>
        </article>
        `;
    }

    renderItemOption (opt) {

        const renderSelected = (s) => `<span data-selected-id="${s.id}" data-selected-price="${s.price}">${s.name}: ${s.price}.00 EGP</span>`;

        return `
            <li class="cart__item-option" data-option-id="${opt.optionId}">
                <p>${opt.optionName}:</p>
                ${opt.selected.map(s => renderSelected(s)).join("")}
            </li>
        `;
    }

    renderNotes (notes) {
        let markup = "";

        if (notes) {
            markup = 
            `<div class="cart__item-notes">
                <p>Notes:</p>
                <span>${notes}.</span>
            </div>`;
        }
        
        return markup;
    }

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

    /* UNNECESSARY */
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

    showEmptyTemplate () {
        document.querySelector(".cart__empty-template").style.display = "block";

        // hide cart sections
        document.querySelectorAll(".cart__items, .cart__pricing, .cart__submit").forEach(el => el.style.display = "none");
    }

    hideEmptyTemplate () {
        document.querySelector(".cart__empty-template").style.display = "none";

        document.querySelectorAll(".cart__items, .cart__pricing, .cart__submit").forEach(el => el.style.display = "block");
    }

}
