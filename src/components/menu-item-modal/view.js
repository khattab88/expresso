export const elements = {
    menuItemsWrapper: document.querySelector(".menu-items-wrapper"),
    itemsList: document.querySelector(".menu-items-by-category__menu-items-list"),
    modal: document.querySelector(".menu-item-modal"),
    modalBody: document.querySelector(".menu-item-modal__body"),
    itemCount: document.querySelector(".cart-controls__count"),
};

export class ItemModalView {
    constructor() { }

    open(e) {
        const item = e.target.closest(".menu-item");
        if (item) {
            elements.modal.classList.remove("menu-item-modal--close");
            elements.modal.classList.add("menu-item-modal--open");
        }
    }

    close() {
        elements.modal.classList.remove("menu-item-modal--open");
        elements.modal.classList.add("menu-item-modal--close");
    }

    toggleItemOption(e) {
        const option = e.target.closest(".dish-options");
        option.classList.toggle("dish-options--closed");
    }

    changeItemCount(e) {
        const op = e.target.closest(".cart-controls__btn").textContent;
        const countLabel = elements.itemCount;
        let count = parseInt(countLabel.textContent);

        if (op === "+") { count++; }
        else {
            if (count > 1) count--;
        }

        countLabel.textContent = count;
    }
}