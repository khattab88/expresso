/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/* Mutations */
export default {
    addCartItem (state, payload) {
        state.cart.items.push(payload);
        
        sessionStorage.setItem("expresso_cart", JSON.stringify({ 
            branchId: state.cart.branchId,
            items: state.cart.items,
            subTotal: state.cart.subTotal,
            deliveryFee: state.cart.deliveryFee,
            total: state.cart.total
        }));

        return state;
    },
    clearCartItem (state, payload) {
        state.cart.items.splice(payload.index, 1);
        
        return state;
    },
    updateCartItemCount (state, payload) {
        state.cart.subTotal = payload.subTotal;
        state.cart.deliveryFee = payload.deliveryFee;
        state.cart.total = payload.total;

        // TODO: save to storage

        return state;
    },
    makeOrder (state, payload) {
        state.cart.branchId = payload.branchId;
        state.cart.items = payload.items;
        state.cart.subTotal = payload.subTotal;
        state.cart.deliveryFee = payload.deliveryFee;
        state.cart.total = payload.total;

        sessionStorage.setItem("expresso_cart", JSON.stringify({
            branchId: state.cart.branchId,
            items: state.cart.items,
            subTotal: state.cart.subTotal,
            deliveryFee: state.cart.deliveryFee,
            total: state.cart.total
        }));

        return state;
    },
    changeArea (state, payload) {
        state.area.id = payload;

        return state;
    }
};
