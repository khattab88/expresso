export const elements = {
    wrapper: document.querySelector(".restaurant-selection-wrapper"),
    restaurantSelectionBtn: document.querySelector(".restaurant-selection__btn"),
    restaurantSelectionBox: document.querySelector(".restaurant-selection__box"),
    restaurantList: document.querySelector(".restaurant-selection__restaurant-list"),
    restaurantValue: document.querySelector(".restaurant-selection__value"),
};

export class RestaurantSelectionView {
    constructor() {}

    createRestaurant(restaurant) {
        return `<li class="restaurant-selection__restaurant" id="${restaurant.id}">${restaurant.name}</li>`;
    }

    render(restaurants) {
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
                        ${restaurants.map(r => this.createRestaurant(r)).join("")}
                    </ul>
                </div>
            </div> 
        `;

        elements.wrapper.insertAdjacentHTML("afterbegin", markup);
    }
}