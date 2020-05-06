/* eslint-disable no-undef */
import { handleError, getQueryString } from "../base";

import RestaurantMenuPageModel from "./model";
import { elements, RestaurantMenuPageView } from "./view";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";
import ItemModalComponent from "../components/menu-item-modal/index";
import CartComponent from "../components/cart/index";

export default class RestaurantMenuPage {
    constructor () {
        this.init();
        this.setupEventListeners();
    }

    init () {
        try {
            const id = getQueryString("id");

            this.model = new RestaurantMenuPageModel(id);
            this.view = new RestaurantMenuPageView();

            this.navbar = new NavComponent();
            this.footer = new FooterComponent();
            this.itemModal = new ItemModalComponent();
            this.cart = new CartComponent();

            this.view.renderBranchInfo(this.model.branchInfo);
            this.model.menu.menuSections.forEach(mc => this.view.renderMenuCategory(mc));
            this.model.menu.menuSections.forEach(mc => this.view.renderMenuCategoryItems(mc));

        } catch (err) { handleError(err); }
    }


    setupEventListeners () {
        try {

            // toggle menu sections
            elements.menuCategoriesHead.addEventListener("click", e => {
                this.view.toggleMenuCategories();
            });

            // toggle location modal
            Array.from(document.querySelectorAll(".change-location__btn, .location-modal__close, .location-modal__update")).
                forEach((elm) => {
                    elm.addEventListener("click", this.view.toggleLocationModal);
                });

            // open cart modal
            elements.showCart.addEventListener("click", this.view.openCartModal);

            // close cart modal
            elements.closeCart.addEventListener("click", this.view.closeCartModal); 
            elements.cartSubmit.addEventListener("click", this.view.closeCartModal); 
            
        }
        catch (err) { handleError(err); }

    }

}
