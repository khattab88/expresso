/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* Mutations */

import Utils from "../utils";

export default {
    addCartItem (state, payload) {
        state.cart.items.push(payload);

        return state;
    },
    clearCartItem (state, payload) {
        state.cart.items.splice(payload.index, 1);
        
        return state;
    }
};
