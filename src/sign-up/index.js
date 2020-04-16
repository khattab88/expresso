import { handleError } from "../base";

import NavComponent from "../components/nav/index";
import FooterComponent from "../components/footer/index";

export default class SignupPage {
    constructor() {
        this.init();
        this.setupEventListeners();
    }

    init() {
        try {

            this.navbar = new NavComponent();
            this.footer = new FooterComponent();

        } catch (err) { handleError(err); }
    }

    setupEventListeners() {}
}