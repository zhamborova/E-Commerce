import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/104 shopping-bag.svg';
import {connect} from "react-redux";
import {toggleCart} from "../../redux/cart/cart.action";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


const CartIcon = ({hideOrShowCart, totalItems}) => (
    <div className='cart-icon' onClick={hideOrShowCart}>
     <ShoppingIcon className='shopping-icon'/>
     <span className='item-count'>{totalItems}</span>
    </div>
);

const mapStateToProps = (state) =>({
    totalItems: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    hideOrShowCart: () => dispatch(toggleCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);




















