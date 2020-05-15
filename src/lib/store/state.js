/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable array-element-newline */
/* eslint-disable comma-spacing */

/* State */
export default {
    cart: {
        items: JSON.parse(sessionStorage.getItem("expresso_cart") || "[]")   
    } 
};
