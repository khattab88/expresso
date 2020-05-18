/* Actions */
export default {
    addCartItem (context, payload) {
        context.commit("addCartItem", payload);
    },
    clearCartItem (context, payload) {
        context.commit("clearCartItem", payload);
    },
    updateCartItemCount (context, payload) {
        context.commit("updateCartItemCount", payload);
    },
    makeOrder (context, payload) {
        context.commit("makeOrder", payload);
    },
    changeArea (context, payload) {
        context.commit("changeArea", payload);
    }
};
