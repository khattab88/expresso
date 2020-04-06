export const elements = {
    filterDropdownHead: document.querySelector(".filter-dropdown__head"),
    filterDropdown: document.querySelector(".filter-dropdown"),
    filterCuisineList: document.querySelector(".filter-dropdown__cuisine-list"),
    filterCount: document.querySelector(".filter-dropdown__count"),
    filterClear: document.querySelector(".filter-dropdown__clear"),
    restaurantList: document.querySelector(".restaurant-list"),
    restaurantInfoCard: document.querySelectorAll(".restaurant-info-card"),
};

export class RestaurantListPageView {
    constructor() {}

    renderRestaurantCard(restaurant) {
        const markup = `
        <article class="restaurant-info-card" data-id="${restaurant.id}">
            <div class="restaurant-info-card__head" 
                 style="background-image: url(../assets/img/restaurants/${restaurant.image})">
                <div class="delivery-detail">
                    <p class="delivery-detail__title">Average delivery time</p>
                    <span class="delivery-detail__time">${restaurant.deliveryTime} - ${restaurant.deliveryTime + 10} mins</span>
                </div>
            </div>
            <div class="restaurant-info-card__body">
                <div class="restaurant-detail">
                    <h3 class="restaurant-detail__name">${restaurant.name}</h3>
                    <p class="restaurant-detail__desc">${restaurant.slogan}</p>
                </div>
            </div>
            <div class="restaurant-info-card__footer">
                <ul class="restaurant-tags">
                    ${restaurant.tags.map(t => this.createRestaurantTag(t)).join("")}
                </ul>
            </div>
        </article>
    `;
        elements.restaurantList.insertAdjacentHTML("beforeend", markup);
    }

    createRestaurantTag(tag) {
        return `<li class="restaurant-tags__tag-item" data-id="${tag.id}">${tag.title}</li>`;
    }
}
