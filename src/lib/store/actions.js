/* Actions */
export default {
    addCartItem (context, payload) {
        context.commit("addCartItem", payload);
    },
    clearCartItem (context, payload) {
        context.commit("clearCartItem", payload);
    }
};
