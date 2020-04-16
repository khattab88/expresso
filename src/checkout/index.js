import { handleError } from "../base";

import { elements } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";

export default class CheckoutPage {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {

            this.navbar = new NavComponent();
            this.footer = new FooterComponent();

        } catch (err) { handleError(err); }
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