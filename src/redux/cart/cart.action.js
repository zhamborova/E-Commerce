import {CartActionTypes} from "./cart.types";

export const toggleCart = () => {
    return {
        type: CartActionTypes.TOGGLE_CART
    }
};

export const addItem = (item) => {
  return {
      type: CartActionTypes.ADD_ITEM,
      payload: item
  }
};

export const removeItem = (id) => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: id
    }
};



export const decreaseItemCount = (item) => {
    return {
        type: CartActionTypes.DECREASE_ITEM_COUNT,
        payload: item
    }
};

