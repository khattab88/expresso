import Cart from "./model";
import cartView from "./view";

const cart = new Cart();
console.log(`model: ${cart.test()}, ${cartView.test()}`);