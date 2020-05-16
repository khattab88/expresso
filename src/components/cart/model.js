/* eslint-disable consistent-return */
/* eslint-disable no-negated-condition */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export default class CartModel {
    constructor (items = []) {
        this.items = items;
    }

    get empty () {
        return this.items.length < 1;
    }

    getData () {
        // get from strorage
        let cart = JSON.parse(window.sessionStorage.getItem("expresso_cart"));

        if (cart) {
            if (cart.details.length > 0) {
                const items = cart.details.map(d => d);

                return items;
            }
        } else {
            return [];
        }
    } 

    getSubTotal () {
        let subTotal = 0;

        this.items.forEach(data => {
            const itemValue = parseInt(data.count * data.itemPrice);

            subTotal += itemValue;
        });
        
        return subTotal;
    }

    getDeliveryFee () {
        return 5;
    }

    getTotal () {
        return this.getSubTotal() + this.getDeliveryFee();
    }
}
