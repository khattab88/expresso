/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Mutations */
export default {
    addCartItem (state, payload) {
        state.cart.items.push(payload);

        sessionStorage.setItem("expresso_cart", JSON.stringify(state.cart.items));   

        return state;
    },
    clearCartItem (state, payload) {
        state.cart.items.splice(payload.index, 1);
        
        return state;
    }
};
