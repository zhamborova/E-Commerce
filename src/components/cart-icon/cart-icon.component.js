import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/104 shopping-bag.svg';
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.action";


const CartIcon = ({hideOrShowCart}) => (
    <div className='cart-icon' onClick={hideOrShowCart}>
     <ShoppingIcon className='shopping-icon'/>
     <span className='item-count'>0 </span>
    </div>
);


const mapDispatchToProps = dispatch => ({
    hideOrShowCart: () => dispatch(toggleCart())
});

export default connect(null, mapDispatchToProps)(CartIcon);