export const elements = {
    wrapper: document.querySelector(".location-selection-wrapper"),
    locationSelectionBtn: document.querySelector(".location-selection__btn"),
    locationSelectionBox: document.querySelector(".location-selection__box"),
    locationList: document.querySelector(".location-selection__city-list"),
    locationValue: document.querySelector(".location-selection__value"),
};

export class LocationSelectionView {
    constructor() { }

    createArea(area) {
        return `<li class="location-selection__area" id="${area.id}">${area.name}</li>`;
    }

    createCity(city) {
        return `
            <li class="location-selection__city" id="city-${city.id}">
                <div class="location-selection__city-name">${city.name}</div>
                <ul class="location-selection__area-list">
                    ${city.areas.map(a => this.createArea(a)).join("")}
                </ul>
            </li>
        `;
    }

    render(cities) {
        const markup = `
            <div class="location-selection">
                <button class="location-selection__btn">
                    <i class="location-selection__icon-location material-icons-outlined">location_on</i>
                    <p class="location-selection__value">Type a delivery location</p>
                    <i class="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i class="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>

                <div class="location-selection__box">
                    <input type="text" class="location-selection__input">

                    <ul class="location-selection__city-list">
                        ${cities.map(c => this.createCity(c)).join("")}
                    </ul>
                </div>
            </div>
        `;

        elements.wrapper.insertAdjacentHTML("afterbegin", markup);
    }

    toggle(e) {
        const locationSelection = e.target.closest(".location-selection");
        const btn = locationSelection.querySelector(".location-selection__btn");
        const box = locationSelection.querySelector(".location-selection__box");

        btn.classList.toggle("location-selection__btn--open");
        box.classList.toggle("location-selection__box--open");
    }

    select(e) {
        const locationSelection = e.target.closest(".location-selection");
        const value = locationSelection.querySelector(".location-selection__value");

        const area = e.target.textContent;
        value.textContent = area;

        this.toggle(e);
    }

    displayArea(area) {
        document.querySelector(".location-selection__value").textContent = area.name;
    }
}