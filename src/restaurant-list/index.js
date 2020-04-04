import { elements } from "./view";

export default class RestaurantListPage {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {

        // toggle filter dropdown
        elements.filterDropdownHead.addEventListener("click", e => {
            elements.filterDropdown.classList.toggle("filter-dropdown--open");
        });

        // get filter values 
        let filters = [];
        elements.filterCuisineList.addEventListener("change", e => {
            
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
            if(filters.length > 0) {
                elements.filterCount.textContent = filters.length;
                elements.filterCount.style.opacity = 1;
                elements.filterCount.style.visibility = "visible";
                elements.filterClear.style.display = "inline-block";
            }else {
                elements.filterCount.style.opacity = 0;
                elements.filterCount.style.visibility = "hidden";
                elements.filterClear.style.display = "none";
            }
        });

        // clear filters
        elements.filterClear.addEventListener("click", e => {
            filters = [];
            elements.filterCount.style.opacity = 0;
            elements.filterCount.style.visibility = "hidden";
            elements.filterClear.style.display = "none";
        });


        // navigate to restaurant menu page
        elements.restaurantInfoCard.forEach((e) => {
            e.addEventListener("click", () => {
                window.location.assign("../restaurant-menu/index.html");
            });
        });

    }
}