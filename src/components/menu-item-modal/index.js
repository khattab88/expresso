/* eslint-disable indent-legacy */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { handleError } from "../../base";

import ItemModalModel from "./model";
import { elements, ItemModalView } from "./view";

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
                    // handleError(err);
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
                if (e.target.matches(".cart-controls, .cart-controls *")) {
                    this.view.changeItemCount(e);
                }
            });

            // add to order
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".add-order-btn, .add-order-btn *")) {
                    
                    this.view.close();

                    // display toast message
                    elements.toastMessage.classList.toggle("toast-message--visible");

                    setTimeout(() => {
                        elements.toastMessage.classList.toggle("toast-message--visible");
                    }, 5000);
                }
            });

        } catch (err) { handleError(err); }
    }
}
