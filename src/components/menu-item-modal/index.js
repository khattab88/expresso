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
import ToastMessage from "../UI/toastMessage";

import Component from "../../lib/component";
import store from "../../lib/store/index";

export default class ItemModalComponent extends Component {

    // Pass our store instance and the HTML element up to the parent Component
    constructor (branchId) {
        super({ store: null, element: document.querySelector(".menu-item-modal") });
        
        this.branchId = branchId;
        this.init();
        this.setupEventListeners();
    }

    init () {
        this.model = new ItemModalModel();
        this.view = new ItemModalView();
    }

    render (item) {
        this.view.render(item); 
    }

    open () {
        this.view.open();
    }

    close () {
        this.view.close();
    }

    setupEventListeners () {
        try {

            // open modal
            elements.menuItemsWrapper.addEventListener("click", e => { 
                try {
                    const id = e.target.closest(".menu-item").id;

                    this.model.setItem(id);

                    this.render(this.model.item); 
                    this.open();

                } catch (err) {
                    handleError(err);
                }
            });

            // close modal
            elements.modal.addEventListener("click", e => {
                if (e.target.matches(".menu-item-modal__close, .menu-item-modal__close *")) {
                    e.stopPropagation();
                    this.close();
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

        const required = cartData.options
                            .filter(opt => opt.optionType === OptionType.Required)
                            .filter(opt => opt.selected.length === 0);

        if (required.length === 0) {
            this.model.valid = true;
        }

        return this.model.valid;
    }

    addToCart () {
        const cartData = this.view.getCartData();

        console.log(cartData);

        const valid = this.validate();

        if (valid) {

            // call store addCartItem action
            store.dispatch("addCartItem", cartData);

            this.close();

            const toastMessage = new ToastMessage("Item added to cart");

            // display toast message
            toastMessage.toggle();

            // hide toast message
            setTimeout(() => toastMessage.toggle(), 5000);
        } else {
            const requiredElements = this.view.getRequiredOptions();

            requiredElements.forEach(el => { 
                this.view.displayTooltip("Please select one of these options.", el, 70, -10);
             });
        }
    }
}
