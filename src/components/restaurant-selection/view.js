/* eslint-disable quotes */
/* eslint-disable no-undef */
export const elements = {
    wrapper: document.querySelector(".restaurant-selection-wrapper"),
    restaurantSelectionBtn: document.querySelector(".restaurant-selection__btn"),
    restaurantSelectionBox: document.querySelector(".restaurant-selection__box"),
    restaurantList: document.querySelector(".restaurant-selection__restaurant-list"),
    restaurantValue: document.querySelector(".restaurant-selection__value")
};

export class RestaurantSelectionView {
    constructor () { }

    createBranch (branch) {
        return `<li class="restaurant-selection__restaurant" id="${branch.restaurant.id}" data-area="${branch.area.id}">${branch.restaurant.name}</li>`;
    }

    createEmptyResult () {
        return `<li class="restaurant-selection__restaurant">no results found</li>`;
    }

    render (branches) {
        const markup = `
            <div class="restaurant-selection">
                <button class="restaurant-selection__btn">
                    <i class="restaurant-selection__icon-store material-icons">search</i>
                    <p class="restaurant-selection__value">Find a restaurant</p>
                    <i class="restaurant-selection__icon-caret restaurant-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i class="restaurant-selection__icon-caret restaurant-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                <div class="restaurant-selection__box">
                    <input type="text" class="restaurant-selection__input">
                    <ul class="restaurant-selection__restaurant-list">
                        ${branches.map(r => this.createBranch(r)).join("")}
                    </ul>
                </div>
            </div> 
        `;

        elements.wrapper.insertAdjacentHTML("afterbegin", markup);
    }

    toggle (e) {
        const restaurantSelection = e.target.closest(".restaurant-selection");
        const btn = restaurantSelection.querySelector(".restaurant-selection__btn");
        const box = restaurantSelection.querySelector(".restaurant-selection__box");

        btn.classList.toggle("restaurant-selection__btn--open");
        box.classList.toggle("restaurant-selection__box--open");
    }

    select (e) {
        const restaurantSelection = e.target.closest(".restaurant-selection");
        const value = restaurantSelection.querySelector(".restaurant-selection__value");

        const restaurant = e.target.textContent;

        value.textContent = restaurant;

        this.toggle(e);
    }
}
