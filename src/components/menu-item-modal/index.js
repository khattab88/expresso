import { handleError } from "../../base";

import { elements, ItemModalView } from "./view";

export default class ItemModalComponent {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        this.view = new ItemModalView();
    }

    setupEventListeners() {
        try {

            // open modal
            elements.menuItemsWrapper.addEventListener("click", e => this.view.open(e));

            // close modal
            document.querySelector(".menu-item-modal__close").addEventListener("click", this.view.close);

            // add to order
            document.querySelector(".add-order-btn").addEventListener("click", e => {
                this.view.close();

                // display toast message
                elements.toastMessage.classList.toggle("toast-message--visible");

                setTimeout(() => {
                    elements.toastMessage.classList.toggle("toast-message--visible");
                }, 5000);
            });

            // toggle item option
            elements.modalBody.addEventListener("click", e => {
                if (e.target.matches(".dish-options__head, .dish-options__head *")) {
                    e.stopPropagation();
                    this.view.toggleItemOption(e);
                }
            });

            // increment/decrement menu item count
            document.querySelectorAll(".cart-controls")
                .forEach(el => el.addEventListener("click", e => this.view.changeItemCount(e)));

        } catch (err) { handleError(err); }
    }
}