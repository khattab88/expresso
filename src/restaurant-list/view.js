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
    constructor() { }

    renderTag(tag) {
        const markup = `
            <li class="filter-dropdown__cuisine-item">
                <input type="checkbox" class="filter-dropdown__cuisine-checkbox" id="tag-${tag.id}">
                <label class="filter-dropdown__cuisine-name" for="tag-${tag.id}">${tag.title}</label>
            </li>
        `;

        elements.filterCuisineList.insertAdjacentHTML("beforeend", markup);
    }

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

    toggleFilterDropdown() {
        elements.filterDropdown.classList.toggle("filter-dropdown--open");
    }

    navigateToMenu(e) {
        const restaurant = e.target.closest(".restaurant-info-card");
        const id = restaurant.dataset.id;
        window.location.assign(`../restaurant-menu/index.html?id=${id}`);
    }

    getSelectedTags() {
        let selectedTags = [];
        Array.from(elements.filterCuisineList.children).forEach(el => {
            const checkbox = el.querySelector(".filter-dropdown__cuisine-checkbox");
            if (checkbox.checked) {
                const id = checkbox.id.split("-")[1];
                selectedTags.push(id);
            }
        });
    }

    selectTag(e) {
        const filterItem = e.target.closest(".filter-dropdown__cuisine-item").children;

        const tagEl = filterItem[1];
        const id = tagEl.getAttribute("for").split("-")[1];
        const checked = filterItem[0].checked;

        return {
            id, checked
        }
    }

    displayTagFilterStatus(selectedTagsCount) {
        if (selectedTagsCount > 0) {
            elements.filterCount.textContent = selectedTagsCount;
            elements.filterCount.style.opacity = 1;
            elements.filterCount.style.visibility = "visible";
            elements.filterClear.style.display = "inline-block";
        } else {
            elements.filterCount.style.opacity = 0;
            elements.filterCount.style.visibility = "hidden";
            elements.filterClear.style.display = "none";
        }
    }

    clearTagFilter() {
        elements.filterCount.style.opacity = 0;
        elements.filterCount.style.visibility = "hidden";
        elements.filterClear.style.display = "none";
    }
}
