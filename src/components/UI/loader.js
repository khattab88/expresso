/* eslint-disable no-undef */
export default class Loader {
    constructor (parent, img = "../assets/img/loader-grid.svg") {
        this.parent = parent;
        this.img = img;

        this.loader = null;

        this.render();
    }

    render () {
        this.loader = document.createElement("img");
        this.loader.setAttribute("src", this.img);
        this.loader.classList.add("loader");

        this.parent.style.position = "relative";
        this.parent.appendChild(this.loader);        
    }

    hide () {
        this.loader.classList.add("loader--hidden");
    }
}
