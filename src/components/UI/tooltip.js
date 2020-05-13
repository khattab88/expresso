/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quotes */
export default class Tooltip {
    constructor (message, parent, top, left) {
        this.message = message;
        this.parent = parent;
        this.top = top;
        this.left = left;

        this.tooltip = null;
    }

    render () {

        const markup = `<p>${this.message}</p>`;

        this.tooltip = document.createElement("div");

        this.tooltip.classList.add("tooltip");

        this.tooltip.style.cssText = `top:${this.top}px;left:${this.left}px;`;

        this.tooltip.innerHTML = markup;

        this.parent.appendChild(this.tooltip);
    }

    hide () {
        this.tooltip.style.display = "none";
    }

}
