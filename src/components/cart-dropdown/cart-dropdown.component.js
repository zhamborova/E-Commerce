import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";


const CartDropDown = (props) => (
  <div className='cart-dropdown'>
     <div className='cart-items' >
         {props.cartItems.map(item=>(
             <img src={item.imageUrl}/>
         ))}
     </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});
export default connect(mapStateToProps)(CartDropDown);