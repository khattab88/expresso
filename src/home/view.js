export const elements = {
    showcase: document.querySelector(".showcase"),
    showcaseHead: document.querySelector(".showcase__head"),
    showcaseBigCard: document.querySelector(".restaurant-card--big"),
};

export class HomePageView {
    constructor() {}

    createRestaurantCard(restaurant, position) {
        return `
            <article class="restaurant-card restaurant-card--${position}" id="${restaurant.id}">
                <a class="restaurant-card__link" href="../restaurant-menu/index.html?id=${restaurant.id}">
                    <img class="restaurant-card__img" src="../assets/img/restaurants/${restaurant.image}" alt="${restaurant.image}">
                    <div class="restaurant-card__name">${restaurant.name}</div>
                    <div class="restaurant-card__desc">${restaurant.slogan}</div>
                </a>
            </article>
        `;
    }

    renderRestaurantBigCard(restaurant) {
        const markup = 
            `<article class="restaurant-card restaurant-card--big" id="${restaurant.id}">
                <a class="restaurant-card__link" href="../restaurant-menu/index.html?id=${restaurant.id}">
                    <img class="restaurant-card__img" src="../assets/img/restaurants/${restaurant.image}" alt="${restaurant.image}">
                    <div class="restaurant-card__name">${restaurant.name}</div>
                    <div class="restaurant-card__desc">${restaurant.slogan}</div>
                </a>
            </article>`;

        elements.showcaseHead.insertAdjacentHTML("afterend", markup);
    }

    renderRestaurantCards(restaurants) {
        let markup = "";
        
        for(let i=0; i < 6; i++) {
            markup += this.createRestaurantCard(restaurants[i], i+1);
        }

        elements.showcase.insertAdjacentHTML("beforeend", markup);
    }
}