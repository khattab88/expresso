import { elements } from "./view";

export default class RestaurantMenuPage {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {

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


    toggleLocationModal() {
        try {
            elements.locationModal.classList.toggle("location-modal--open");
        } catch(err) { console.log(err); }
    }

    toggleMenuCategories() {
        try {
            elements.menuCategoriesBody.classList.toggle("menu-categories__body--open");
        } catch(err) { console.log(err); }
    }

}