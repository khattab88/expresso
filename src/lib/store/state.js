/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable array-element-newline */
/* eslint-disable comma-spacing */

/* State */

const cart = JSON.parse(sessionStorage.getItem("expresso_cart") || "{}");

export default {
    cart: {
        branchId: cart.branchId || 0,
        // items: JSON.parse(sessionStorage.getItem("expresso_cart") || "[]"),
        items: cart.items || [],
        subTotal: cart.subTotal || 0,
        deliveryFee: cart.deliveryFee || 0,
        total: cart.total || 0
    },
    area: { id: "1" }
};
