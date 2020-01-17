import {CartActionTypes} from "./cart.types";
import {addItem, decreaseItemCount, removeItem} from "./cart.utilities";

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART:
            return{
                ...state,
               hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
             ...state,
                cartItems: addItem(state.cartItems, action.payload)
            };

        case CartActionTypes.REMOVE_ITEM:
            return{
              ...state,
                cartItems:removeItem(state.cartItems, action.payload)
            };

        case CartActionTypes.DECREASE_ITEM_COUNT:
            return{
                ...state,
                cartItems:decreaseItemCount(state.cartItems, action.payload)
            };



        default:
            return state;
    }

};

export default cartReducer;