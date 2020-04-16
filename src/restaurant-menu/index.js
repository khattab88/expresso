import { handleError } from "../base";

import RestaurantMenuPageModel from "./model";
import { elements, RestaurantMenuPageView } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";
import ItemModalComponent from "../components/menu-item-modal/index";
import CartComponent from "../components/cart/index";

export default class RestaurantMenuPage {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {
            this.model = new RestaurantMenuPageModel();
            this.view = new RestaurantMenuPageView();

            this.navbar = new NavComponent();
            this.footer = new FooterComponent();
            this.itemModal = new ItemModalComponent();
            this.cart = new CartComponent();

            this.model.menuCategories.forEach(mc => this.view.renderMenuCategory(mc));
            this.model.menuCategories.forEach(mc => this.view.renderMenuCategoryItems(mc));

        } catch(err) { handleError(err); }
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