export const elements = {
    menuCategoriesHead: document.querySelector(".menu-categories__head"),
    menuCategoriesBody: document.querySelector(".menu-categories__body"),
    locationModal : document.querySelector(".location-modal"),
    showCart: document.querySelector(".restaurant-sidebar__show-cart"),
    closeCart: document.querySelector(".cart__header-close"),
    cartModal: document.querySelector(".cart-modal"),
    cartSubmit: document.querySelector(".cart__submit-btn"),
    menuCategoriesList: document.querySelector(".menu-categories__list"),
    menuItemsWrapper: document.querySelector(".menu-items-wrapper"),
};

export class RestaurantMenuPageView {
    constructor() {}

    renderMenuCategory(menuCategory) {
        const markup = `
            <li class="menu-categories__category-item" id="${menuCategory.id}">
                <a href="#category-${menuCategory.id}" class="menu-categories__category-link">${menuCategory.name}</a>
            </li>`;
        elements.menuCategoriesList.insertAdjacentHTML("beforeend", markup);
    } 

    renderMenuCategoryItems(menuCategory) {
        const markup = `
            <article class="menu-items-by-category" id="category-${menuCategory.id}">
                <h2 class="menu-items-by-category__category-name">${menuCategory.name}</h2>
                <div class="menu-items-by-category__menu-items-list">
                    ${menuCategory.menuItems.map(mi => this.createMenuItem(mi)).join("")}
                </div>
            </article>
        `;

        elements.menuItemsWrapper.insertAdjacentHTML("beforeend", markup);
    }

    createMenuItem(menuItem) {
        return `
            <article class="menu-item" id="item-${menuItem.id}">
                <div class="menu-item__img" style="background-image: url(../assets/img/${menuItem.image})"></div>
                <div class="menu-item__detail">
                    <div class="menu-item__detail-box">
                        <h4 class="menu-item__name">${menuItem.name}</h4>
                        <p class="menu-item__price">${menuItem.price} EGP</p>
                    </div>
                    <p class="menu-item__desc">${menuItem.desc}</p>
                </div>
            </article>
        `;
    }
}