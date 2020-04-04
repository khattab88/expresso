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
        }
        catch (err) { console.log(err); }

    }


    toggleLocationModal() {
        elements.locationModal.classList.toggle("location-modal--open");
    }

    toggleMenuCategories() {
        elements.menuCategoriesBody.classList.toggle("menu-categories__body--open");
    }

}