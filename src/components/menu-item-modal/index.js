/* eslint-disable dot-location */
/* eslint-disable indent */
/* eslint-disable no-useless-return */
/* eslint-disable no-warning-comments */
/* eslint-disable indent-legacy */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { handleError } from "../../base";

import ItemModalModel from "./model";
import { elements, ItemModalView } from "./view";
import OptionType from "../../core/enums/optionType";

export default class ItemModalComponent {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        this.model = new ItemModalModel();
        this.view = new ItemModalView();
    }

    setupEventListeners () {
        try {

            // open modal
            elements.menuItemsWrapper.addEventListener("click", e => { 
                try {
                    const id = e.target.closest(".menu-item").id;

                    this.model.setItem(id);

                    this.view.open(this.model.item); 

                } catch (err) {
                    handleError(err);
                }
            });

            // close modal
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".menu-item-modal__close, .menu-item-modal__close *")) {
                    e.stopPropagation();
                    this.view.close();
                }
            });

            // toggle item option
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".dish-options__head, .dish-options__head *")) {
                    e.stopPropagation();
                    this.view.toggleItemOption(e);
                }
            });

            // increment/decrement menu item count
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".cart-controls, .cart-controls *")) { this.view.changeItemCount(e); }
            });

            // add to cart
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".add-order-btn, .add-order-btn *")) { this.addToCart(); }
            });

        } catch (err) { handleError(err); }
    }

    validate () {
        const cartData = this.view.getCartData();

        const required = cartData.cart.options
                            .filter(opt => opt.optionType === OptionType.Required)
                            .filter(opt => opt.selected.length === 0);

        if (required.length === 0) {
            this.model.valid = true;
        }

        return this.model.valid;
    }

    addToCart () {
        const cartData = this.view.getCartData();

        const valid = this.validate();

        if (valid) {
            this.model.addToCart(cartData);

            this.view.close();

            // display toast message
            elements.toastMessage.classList.toggle("toast-message--visible");

            // hide toast message
            setTimeout(() => {
                elements.toastMessage.classList.toggle("toast-message--visible");
            }, 5000);
        } else {
            const requiredElements = this.view.getRequiredOptions();

            requiredElements.forEach(el => { 
                this.view.displayTooltip("Please select one of these options.", el, 70, -10);
             });
        }
    }
}
