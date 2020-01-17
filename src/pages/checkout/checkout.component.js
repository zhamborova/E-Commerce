import React from 'react';
import './checkout.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const CheckoutPage = ({cartItems,totalPrice}) => {
     const headerNames = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
    return <div className='checkout-page'>
        <div className='checkout-header'>
            {headerNames.map(name => (
                <div key={name} className='header-block'>
                    <span >{name}</span>
                </div>))}
        </div>
        {cartItems.map(item =>( <CheckoutItem key={item.id}  item={item}/>))}
        <div className='total'><span>${totalPrice}</span></div>
    </div>
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
 });

export default connect(mapStateToProps)(CheckoutPage);