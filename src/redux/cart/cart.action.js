import {CartActionTypes} from "./cart.types";

export const hideOrShowCart = () => {
    return {
        type: CartActionTypes.SHOW_OR_HIDE_CART
    }
};