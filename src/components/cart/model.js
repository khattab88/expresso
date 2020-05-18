import BranchService from "../../core/services/branch-service";

/* eslint-disable valid-jsdoc */
/* eslint-disable consistent-return */
/* eslint-disable no-negated-condition */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default class CartModel {
    constructor (branchId, items = []) {
        this.branchId = branchId;
        this.items = items;

        // Dependency
        this.branchService = new BranchService();
        this.branch = this.branchService.getById(this.branchId);
    }

    get empty () {
        return this.items.length < 1;
    }

    getSubTotal (items) {
        let subTotal = 0;

        this.items.forEach(item => {
            const itemValue = parseInt(item.count * (item.itemPrice + item.optionsTotal));

            subTotal += itemValue;
        });
        
        return subTotal;
    }

    getDeliveryFee () {
        return this.branch.restaurant.deliveryFee;
    }

    getTotal () {
        return this.getSubTotal() + this.getDeliveryFee();
    }
}
