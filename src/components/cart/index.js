import { elements } from "./view";

export default class CartComponent {
    constructor() {
        this.setupEventListeners();

        this.calculate();
    }

    setupEventListeners() {
        try {

            // remove item row from cart
            elements.cartItems.addEventListener("click", e => {
                this.removeItem(e);
            });

        } catch (err) { console.log(err); }
    }

    removeItem(e) {
        const item = e.target.closest(".cart__item-controls-remove").closest(".cart__item");
        if (item) {
            item.parentNode.removeChild(item);
        }
    }

    getItems() {
        const cartItems = Array.from(document.querySelectorAll(".cart__item"))
            .map(item => {
                const name = item.querySelector(".cart__item-name").textContent;
                const price = parseInt(item.querySelector(".cart__item-price").textContent.split(".")[0]);
                const count = parseInt(item.querySelector(".cart__item-controls-count").textContent);
                return { name, price, count };
            });
        return cartItems;
    }

    calculate() {
        const items = this.getItems();
        console.log(items);
        let itemsSubTotal = 0;
        items.forEach(item => {
            const itemValue = Math.round(item.count * item.price);
            itemsSubTotal += itemValue;
        });

        elements.subTotal.textContent = this.format(itemsSubTotal);
        elements.deliveryFee.textContent = this.format(5);

        const total = parseInt(elements.subTotal.textContent) + parseInt(elements.deliveryFee.textContent);
        elements.total.textContent = this.format(total);
    }

    format(val) {
        return `${val}.00 EGP`;
    }
}