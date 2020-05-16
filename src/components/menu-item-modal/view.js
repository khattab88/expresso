import Tooltip from "../UI/tooltip";

/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-labels */
/* eslint-disable no-labels */
/* eslint-disable array-callback-return */
/* eslint-disable dot-location */
/* eslint-disable multiline-ternary */
/* eslint-disable newline-after-var */
/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable semi */
/* eslint-disable sort-vars */
/* eslint-disable indent-legacy */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export const elements = {
    menuItemsWrapper: document.querySelector(".menu-items-wrapper"),
    itemsList: document.querySelector(".menu-items-by-category__menu-items-list"),
    modal: document.querySelector(".menu-item-modal"),
    modalBody: document.querySelector(".menu-item-modal__body"),
    itemCount: document.querySelector(".cart-controls__count"),
    toastMessage: document.querySelector(".toast-message"),
    addToCart: document.querySelector(".add-order-btn")
};

export class ItemModalView {
    constructor () { }

    open () {
       elements.modal.classList.remove("menu-item-modal--close");
       elements.modal.classList.add("menu-item-modal--open");
       document.body.style.overflow = "hidden"; 
    }

    close () {
        elements.modal.classList.remove("menu-item-modal--open");
        elements.modal.classList.add("menu-item-modal--close");

        elements.modal.innerHTML = "";

        document.body.style.overflow = "initial";
    }

    render (item) {

        elements.modal.innerHTML = "";

        const markup = `
        <div class="menu-item-modal__content menu-item-modal__content--animated" data-id="${item.id}">
                    <div class="menu-item-modal__container">
                        <div class="menu-item-modal__head">
                            <p class="menu-item-modal__close"><i class="fa fa-times"></i></p>
                            <img class="menu-item-modal__item-img" src="../assets/img/items/${item.image}"
                                alt="${item.name}">
                        </div>
                        <div class="menu-item-modal__body">

                            <section class="dish-info">
                                <div class="dish-info__row">
                                    <h3 class="dish-info__name">${item.name}</h3>
                                    <p class="dish-info__price"><span>${item.price}</span>.00 EGP</p>
                                </div>
                                <p class="dish-info__desc">${item.desc}.</p>
                            </section>

                            ${item.options.map(opt => this.createOptionElement(opt)).join("")}

                            ${this.createNotesElement()}

                        </div>

                        <div class="menu-item-modal__footer">
                            <div class="cart-controls">
                                <span class="cart-controls__btn cart-controls__btn-remove">-</span>
                                <p class="cart-controls__count">1</p>
                                <span class="cart-controls__btn cart-controls__btn-add">+</span>
                            </div>
                            <button type="button" class="add-order-btn" data-id="${item.id}" >Add to order</button>
                        </div>
                    </div>
                </div>`;

        elements.modal.innerHTML = markup;
    }

    createOptionElement (opt) {

        return `
            <article class="dish-options" data-id="${opt.id}" data-type="${opt.type}">

                <div class="dish-options__head">
                    <h4 class="dish-options__title">${opt.name}</h4>
                    <span class="dish-options__icon dish-options__icon--arrow-up"><i
                            class="fa fa-chevron-up"></i></span>
                    <span class="dish-options__icon dish-options__icon--arrow-down"><i
                            class="fa fa-chevron-down"></i></span>
                </div>

                ${this.createValidationMsg(opt.type)}

                ${this.createOptionItems(opt)}

            </article>
        `;
    }

    createOptionItems (opt) {
        const selection = opt.type === "Required" ? "sigle-selection" : "multiple-selection";

        return `
            <ul class="dish-options__body dish-options__${selection}">
                ${opt.optionItems.map(optItem => this.createOptionItem(optItem, opt)).join("")}
            </ul>
        `;
    }

    createOptionItem (optItem, opt) {
        const inputType = opt.type === "Required" ? "radio" : "checkbox";

        return `
        <li class="dish-option">
            <div class="dish-option__detail">
                <input class="dish-option__input-checkbox" type="${inputType}" name="opt-${opt.id}" id="optItem-${optItem.id}" data-id="${optItem.id}">
                <label class="dish-option__name" for="optItem-${optItem.id}">${optItem.name}</label>
            </div>
            <p class="dish-option__price"><span>${optItem.price}</span>.00 EGP</p>
        </li>`;
    }


    createValidationMsg (type) {
        return type === "Required" 
                        ? `<p class="validation-info validation-info--required">Required, choose at least one.</p>` 
                        : `<p class="validation-info validation-info--optional">Optional, choose multiple.</p>`;
    }

    createNotesElement () {
        return `
            <article class="dish-options">
                <div class="dish-options__head">
                    <h4 class="dish-options__title">Add Special Instructions</h4>
                    <span class="dish-options__icon dish-options__icon--arrow-up"><i
                            class="fa fa-chevron-up"></i></span>
                    <span class="dish-options__icon dish-options__icon--arrow-down"><i
                            class="fa fa-chevron-down"></i></span>
                </div>
                <p class="validation-info validation-info--optional"></p>
                <textarea class="dish-options__body dish-option__input-textarea" name="notes" id="notes"
                    cols="40" rows="6"
                    placeholder="Add a note (food allergies, extra sauce, no onions, etc.). Please be clear and concise so we can get your order perfect."></textarea>
            </article>`;
    }

    toggleItemOption (e) {
        const option = e.target.closest(".dish-options");

        option.classList.toggle("dish-options--closed");
    }

    changeItemCount (e) {
        const btn = e.target.closest(".cart-controls__btn"),
              op = btn.textContent,
              countLabel = btn.parentElement.querySelector(".cart-controls__count");

        let count = parseInt(countLabel.textContent);

        if (op === "+") { count++; }
        else {
            if (count > 1) { count--; }
        }

        countLabel.textContent = count;
    }

    getItemData () {
        const itemId = elements.modal.querySelector(".add-order-btn").dataset.id,
              itemName = elements.modal.querySelector(".dish-info__name").textContent,
              itemPrice = parseFloat(elements.modal.querySelector(".dish-info__price > span").textContent);

        return { itemId, itemName, itemPrice }
    }

    getCartData () {

        const itemData = this.getItemData();

         let cartData = {
            count: parseInt(elements.modal.querySelector(".cart-controls__count").textContent),
            notes: document.querySelector("#notes").value,
            options: []
         };
        
        const optionElements = document.querySelectorAll(".dish-options[data-id]");
        if (optionElements) {
            optionElements.forEach(el => {
                
                const optionId = el.dataset.id,
                      optionName = el.querySelector(".dish-options__title").textContent,
                      optionType = el.dataset.type;

                let selected = Array.from(el.querySelectorAll("input"))
                    .filter(input => input.checked === true)
                    .map(input => ({
                         id: input.dataset.id,
                         name: input.parentElement.parentElement.querySelector(".dish-option__name").textContent,
                         price: parseFloat(input.parentElement.parentElement.querySelector(".dish-option__price > span").textContent)
                    }));

                    if (selected.length > 0) {
                        cartData.options.push({ optionId, optionName, optionType, selected });
                    }
            });
        }

        let data = Object.assign(itemData, cartData);

        return data;
    }

    getRequiredOptions () {
        return document.querySelectorAll(".dish-options[data-type='Required']");
    }

    displayTooltip (message, parent, top, left) {
        const tooltip = new Tooltip(message, parent, top, left);
        tooltip.render();

        setTimeout(() => { tooltip.hide() }, 3000);
    }

}
