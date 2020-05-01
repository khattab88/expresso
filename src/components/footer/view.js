/* eslint-disable no-undef */
export const elements = {
    container: document.querySelector(".container"),
    footerCountryBtn: document.querySelector(".change-country__btn"),
    footerCountryDropdown: document.querySelector(".change-country__btn > .country-dropdown")
};

export class FooterView {
    constructor () { }

    render () {
        const markup = `
        <footer class="footer">
            <h2 class="footer__logo">Expresso</h2>

            <section class="footer__links">
                <div class="secondary-navigation">
                    <ul class="secondary-navigation__items">
                        <li class="secondary-navigation__item"><a href="#" class="secondary-navigation__link">About
                                Us</a></li>
                        <li class="secondary-navigation__item"><a href="#" class="secondary-navigation__link">How it
                                works</a></li>
                        <li class="secondary-navigation__item"><a href="../restaurant-list/index.html"
                                class="secondary-navigation__link">Restaurants</a></li>
                        <li class="secondary-navigation__item"><a href="../contact-us/index.html"
                                class="secondary-navigation__link">Contact Us</a></li>
                    </ul>
                </div>
                <div class="social-navigation">
                    <ul class="social-navigation__items">
                        <li class="social-navigation__item">
                            <a href="#" class="social-link">
                                <i class="social-link__icon fa fa-facebook-square"></i>
                            </a>
                        </li>
                        <li class="social-navigation__item">
                            <a href="#" class="social-link"><i class="social-link__icon fa fa-twitter"></i></a>
                        </li>
                        <li class="social-navigation__item">
                            <a href="#" class="social-link"><i class="social-link__icon fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </section>

            <section class="sub-footer">
                <div class="change-country">
                    <button class="change-country__btn">
                        <img class="change-country__flag"
                            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg"
                            alt="egypt" height="20" width="30">
                        Egypt
                        <i class="change-country__caret--down fa fa-caret-down"></i>

                        <ul class="country-dropdown">
                            <li class="country-dropdown__item">
                                <a class="country-dropdown__link" href="#">
                                    <img class="country-dropdown__img" src="../assets/img/flags/ae.svg" alt="UAE">
                                    UAE
                                </a>
                            </li>
                            <li class="country-dropdown__item">
                                <a class="country-dropdown__link" href="#">
                                    <img class="country-dropdown__img" src="../assets/img/flags/sa.svg"
                                        alt="Saudi Arabia">
                                    Saudi Arabia
                                </a>
                            </li>
                            <li class="country-dropdown__item">
                                <a class="country-dropdown__link" href="#">
                                    <img class="country-dropdown__img" src="../assets/img/flags/kw.svg" alt="Kuwait">
                                    Kuwait
                                </a>
                            </li>
                            <li class="country-dropdown__item">
                                <a class="country-dropdown__link" href="#">
                                    <img class="country-dropdown__img" src="../assets/img/flags/qa.svg" alt="Qatar">
                                    Qatar
                                </a>
                            </li>
                            <li class="country-dropdown__item">
                                <a class="country-dropdown__link" href="#">
                                    <img class="country-dropdown__img" src="../assets/img/flags/bh.svg" alt="Bahrain">
                                    Bahrain
                                </a>
                            </li>
                        </ul>
                    </button>
                </div>
                <div class="app-download">
                    <a href="#" class="app-download__btn">
                        <img alt="Download App from Google Playstore" class="app-download__img"
                            src="https://trycarriage.global.ssl.fastly.net/assets/v2/playstore_icon-b9ca6f7b9f6d29531733dab0586cd3ab.svg">
                    </a>
                    <a href="#" class="app-download__btn">
                        <img alt="Download App from Apple App Store" class="app-download__img"
                            src="https://trycarriage.global.ssl.fastly.net/assets/v2/appstore_icon-71d0475940474ee2ba3be457483be01b.svg">
                    </a>
                </div>
            </section>

            <section class="copyright">© 2019 Expresso App. All rights reserved.</section>
        </footer>
        `;

        elements.container.insertAdjacentHTML("beforeend", markup);
    }

    toggleCountryDropdown () {
        const footerCountryBtn = elements.container.querySelector(".change-country__btn");

        footerCountryBtn.classList.toggle("change-country__btn--open");

        const footerCountryDropdown = elements.container.querySelector(".change-country__btn > .country-dropdown");

        footerCountryDropdown.classList.toggle("country-dropdown--open");
    }

}
