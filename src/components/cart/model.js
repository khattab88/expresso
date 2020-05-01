export default class CartModel {
    constructor (items) {
        this.items = items;
    }

    getSubTotal () {
        let subTotal = 0;

        this.items.forEach(item => {
            const itemValue = parseInt(item.count * item.price);

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
