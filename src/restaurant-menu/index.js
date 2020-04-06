import { handleError } from "../base";

import { elements } from "./view";

export default class RestaurantMenuPage {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        try {

            // toggle menu sections
            elements.menuCategoriesHead.addEventListener("click", e => {
                this.toggleMenuCategories();
            });

            // toggle location modal
            Array.from(document.querySelectorAll(".change-location__btn, .location-modal__close, .location-modal__update"))
                .forEach((elm) => {
                    elm.addEventListener("click", this.toggleLocationModal);
                });

            // open cart modal
            elements.showCart.addEventListener("click", this.openCartModal);

            // close cart modal
            elements.closeCart.addEventListener("click", this.closeCartModal); 
            elements.cartSubmit.addEventListener("click", this.closeCartModal); 
            
        }
        catch (err) { handleError(err); }

    }


    toggleLocationModal() {
        elements.locationModal.classList.toggle("location-modal--open");
    }

    toggleMenuCategories() {
        elements.menuCategoriesBody.classList.toggle("menu-categories__body--open");
    }

    openCartModal() {
        elements.cartModal.classList.remove("cart-modal--close");
        elements.cartModal.classList.add("cart-modal--open");
    }

    closeCartModal() {
        elements.cartModal.classList.remove("cart-modal--open");
        elements.cartModal.classList.add("cart-modal--close");
    }

}