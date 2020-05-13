/* eslint-disable no-undef */
export default class ToastMessage {
    constructor (msg) {
        this.msg = msg;
        this.toastMessage = null;

        this.init();
    }

    init () {
        this.render();
        this.addEventListeners();
    }

    render () {
        this.toastMessage = document.createElement("div");
        this.toastMessage.classList.add("toast-message");
        this.toastMessage.innerHTML = `<p class="toast-message__message">${this.msg}</p>
                                       <span class="material-icons toast-message__close">close</span>`;

        document.querySelector(".main").appendChild(this.toastMessage);
    }

    addEventListeners () {
        this.toastMessage.querySelector(".toast-message__close").addEventListener("click", e => this.close(e));
    }

    toggle () {
        this.toastMessage.classList.toggle("toast-message--visible");
    }

    close (e) {
        if (e.target.parentElement.classList.contains("toast-message--visible")) {
            e.target.parentElement.classList.remove("toast-message--visible");
        }
    }
}
