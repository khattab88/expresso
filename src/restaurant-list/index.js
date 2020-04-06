import RestaurantListPageModel from "./model";
import RestaurantListPageView from "./view";

export default class RestaurantListPage {
    constructor() {
        this.setupEventListeners();
    }

    init() {        
        this.model = new RestaurantListPageModel();
        this.view = new RestaurantListPageView();

        this.model.restaurants.forEach(r => this.view.renderRestaurantCard(r));
    }

    setupEventListeners() {
        try {

            // initialize restaurants list
            window.addEventListener("load", this.init);


            // toggle filter dropdown
            this.view.elements.filterDropdownHead.addEventListener("click", e => {
                this.view.elements.filterDropdown.classList.toggle("filter-dropdown--open");
            });

            // get filter values 
            let filters = [];
            this.view.elements.filterCuisineList.addEventListener("change", e => {

                // get selected item
                const filterItem = e.target.closest(".filter-dropdown__cuisine-item").children;
                const checkbox = filterItem[0];
                const label = filterItem[1];
                const value = label.textContent;
                // check if item value in filters list
                if (checkbox.checked) {
                    if (filters.indexOf(value) < 0) {
                        filters.push(value);
                    }
                } else {
                    if (filters.indexOf(value) >= 0) {
                        const index = filters.indexOf(value);
                        filters.splice(index, 1);
                    }
                }
                // display count and clear label
                if (filters.length > 0) {
                    this.view.elements.filterCount.textContent = filters.length;
                    this.view.elements.filterCount.style.opacity = 1;
                    this.view.elements.filterCount.style.visibility = "visible";
                    this.view.elements.filterClear.style.display = "inline-block";
                } else {
                    this.view.elements.filterCount.style.opacity = 0;
                    this.view.elements.filterCount.style.visibility = "hidden";
                    this.view.elements.filterClear.style.display = "none";
                }
            });

            // clear filters
            this.view.elements.filterClear.addEventListener("click", e => {
                filters = [];
                this.view.elements.filterCount.style.opacity = 0;
                this.view.elements.filterCount.style.visibility = "hidden";
                this.view.elements.filterClear.style.display = "none";
            });


            // navigate to restaurant menu page
            this.view.elements.restaurantInfoCard.forEach((e) => {
                e.addEventListener("click", () => {
                    window.location.assign("../restaurant-menu/index.html");
                });
            });

        }
        catch (err) { console.log(err); }
    }

}