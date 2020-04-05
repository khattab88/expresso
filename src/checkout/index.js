import { elements } from "./view";

export default class CheckoutPage {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {

         // toggle map modal
         Array.from(document.querySelectorAll(".delivery-info__add, .map-modal__confirm, .map-modal__close"))
         .forEach(el => el.addEventListener("click", e => {
             this.toggleMapModal();
         }));
    }

    toggleMapModal() {
        elements.mapModal.classList.toggle("map-modal--open");
    }
}