/* eslint-disable no-undef */
export const elements = {
    container: document.querySelector(".container"),
    navToggle: document.querySelector(".navbar__toggle"),
    navigationItems: document.querySelector(".navigation__items"),
    navCountryBtn: document.querySelector(".country-btn"),
    navCountryDropdown: document.querySelector(".country-btn > .country-dropdown"),
    navCategoryBtn: document.querySelector(".category-btn"),
    navCategoryDropdown: document.querySelector(".category-dropdown")
};

export class NavView {
    constructor () { }

    render () {
        const markup = `
        <nav class="navbar">
            <div class="logo">
                <a href="../home" class="logo__link">
                    <h2 class="logo__title">Expresso</h2>
                </a>
            </div>
            <div class="navigation">
                <ul class="navigation__items">
                    <li class="navigation__item"><a href="../login/index.html" class="navigation__link">Login</a></li>
                    <li class="navigation__item"><a href="../sign-up/index.html" class="navigation__link">Sign Up</a>
                    </li>
                    <li class="navigation__item"><a href="../contact-us/index.html" class="navigation__link">Contact
                            Us</a></li>
                    <li class="navigation__item nav-language"><a href="#" class="navigation__link">العربية</a></li>
                    <li class="navigation__item nav-country">
                        <button class="country-btn">
                            <img class="country-btn__img"
                                src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg"
                                alt="egypt">
                            <i class="country-btn__caret--down fa fa-caret-down"></i>

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
                                        <img class="country-dropdown__img" src="../assets/img/flags/kw.svg"
                                            alt="Kuwait">
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
                                        <img class="country-dropdown__img" src="../assets/img/flags/bh.svg"
                                            alt="Bahrain">
                                        Bahrain
                                    </a>
                                </li>
                            </ul>
                        </button>
                    </li>
                    <li class="navigation__item nav-cart">
                        <a href="../checkout/index.html" class="navigation__link">
                            <div class="cart-btn">
                                <img alt="Cart" height="27" class="cart-btn__img"
                                    src="https://trycarriage.global.ssl.fastly.net/assets/v2/shopping_cart_icon_white-9c4c2230af01610868ccb639a00b01bb.svg"
                                    title="Cart" width="30">
                                <em class="cart-btn__item-count">1</em>
                            </div>
                        </a>
                    </li>
                    <li class="navigation__item nav-category">
                        <button class="category-btn">
                            <i class="category-btn__icon material-icons">fastfood</i>
                            <i class="category-btn__caret--down fa fa-caret-down"></i>
                        </button>

                        <ul class="category-dropdown">
                            <li class="category-dropdown__item">
                                <a href="#" class="category-dropdown__link">
                                    <!--<img src="../../assets/img/icons/categories/groceries_icon.svg" alt="" class="category-dropdown__icon">-->
                                    <i class="category-dropdown__icon material-icons">shopping_basket</i>
                                    Groceries
                                </a>
                            </li>
                            <li class="category-dropdown__item">
                                <a href="#" class="category-dropdown__link">
                                    <i class="category-dropdown__icon material-icons">local_florist</i>
                                    Flowers
                                </a>
                            </li>
                            <li class="category-dropdown__item">
                                <a href="#" class="category-dropdown__link">
                                    <i class="category-dropdown__icon material-icons">card_giftcard</i>
                                    Cosmetics
                                </a>
                            </li>
                            <li class="category-dropdown__item">
                                <a href="#" class="category-dropdown__link">
                                    <i class="category-dropdown__icon material-icons">local_pharmacy</i>
                                    Supplements
                                </a>
                            </li>
                            <li class="category-dropdown__item">
                                <a href="#" class="category-dropdown__link">
                                    <i class="category-dropdown__icon material-icons">touch_app</i>
                                    Electronics
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navbar__toggle">
                <span class="navbar__toggle-icon fa fa-align-justify"></span>
            </div>
        </nav>
        `;

        elements.container.insertAdjacentHTML("afterbegin", markup);
    }

    toggleMobileNav () {
        const navigationItems = elements.container.querySelector(".navigation__items");

        navigationItems.classList.toggle("navigation__items--mobile-open");
    }

    toggleNavCountry () {
        const navCountryBtn = elements.container.querySelector(".country-btn");

        navCountryBtn.classList.toggle("country-btn--open");

        const navCountryDropdown = elements.container.querySelector(".country-btn > .country-dropdown");

        navCountryDropdown.classList.toggle("country-dropdown--open");
    }

    toggleNavCategory () {
        const navCategoryBtn = elements.container.querySelector(".category-btn");

        navCategoryBtn.classList.toggle("category-btn--open");

        const navCategoryDropdown = elements.container.querySelector(".category-dropdown");

        navCategoryDropdown.classList.toggle("category-dropdown--open");
    }
}
