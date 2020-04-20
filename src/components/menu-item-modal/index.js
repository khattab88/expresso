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
            elements.menuItemsWrapper.addEventListener("click", e => this.view.open(e),);

            // close modal
            document.querySelectorAll(".menu-item-modal__close, .add-order-btn")
                .forEach(elm => elm.addEventListener("click", this.view.close));


            // toggle item option
            elements.modalBody.addEventListener("click", e => { 
                if(e.target.matches(".dish-options__head, .dish-options__head *")) {
                    this.view.toggleItemOption(e);
                }
            });

            // increment/decrement menu item count
            document.querySelectorAll(".cart-controls")
                .forEach(el => el.addEventListener("click", e => this.view.changeItemCount(e)));

        } catch (err) { handleError(err); }
    }
}