import { handleError } from "../../base";

import { elements } from "./view";

export default class ItemModalComponent {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        try {

            // open modal
            elements.itemsList.addEventListener("click", e => {
                const item = e.target.closest(".menu-item");
                if(item) {
                    this.open();
                    console.log(item.id);
                }
            });

            // close modal
            Array.from(document.querySelectorAll(".menu-item-modal__close, .add-order-btn"))
                .forEach(elm => elm.addEventListener("click", this.close));

            // toggle item option
            elements.modalBody.addEventListener("click", e => { this.toggleItemOption(e) });


            // increment/decrement menu item count
            Array.from(document.querySelectorAll(".cart-controls"))
            .forEach(el => el.addEventListener("click", (e) => {

                const op = e.target.closest(".cart-controls__btn").textContent;
                const countLabel = elements.itemCount;
                let count = parseInt(countLabel.textContent);

                if (op === "+") { count++; } 
                else {
                    if (count > 1) count--;
                }

                countLabel.textContent = count;
            }));

        } catch (err) { handleError(err); }
    }

    open() {
        elements.modal.classList.remove("menu-item-modal--close");
        elements.modal.classList.add("menu-item-modal--open");
    }

    close() {
        elements.modal.classList.remove("menu-item-modal--open");
        elements.modal.classList.add("menu-item-modal--close");
    }

    toggleItemOption(e) {
        const option = e.target.closest(".dish-options");
        option.classList.toggle("dish-options--closed");
    }
}