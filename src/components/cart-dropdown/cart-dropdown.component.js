import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import {toggleCart} from "../../redux/cart/cart.action";


const CartDropDown = ({cartItems, history, dispatch}) => (
  <div className='cart-dropdown'>
     <div className='cart-items' >
         {cartItems.length ?
             cartItems.map(item=>(
            <CartItem key={item.id} item={item}/>)) :
             <span className='empty-message'>Your cart is empty</span>
          }
     </div>
      <CustomButton onClick={()=>{history.push('/checkout');
                                  dispatch(toggleCart());}}>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));