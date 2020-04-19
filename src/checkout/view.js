export const elements = {
    mapModal: document.querySelector(".map-modal"),
};

export class CheckoutView {
    constructor() {}

    toggleMapModal() {
        elements.mapModal.classList.toggle("map-modal--open");
    }
}