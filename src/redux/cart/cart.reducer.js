import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utilities";

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
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case CartActionTypes.REMOVE_ITEM:
            return{

            };
        default:
            return state;
    }

};

export default cartReducer;