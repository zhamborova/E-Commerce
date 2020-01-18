import React from 'react';
import './checkout.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import {connect} from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button";

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
          <div className='warning'>
              Please use the following test credit card for payments <br/>
              Number: 4242 4242 4242 4242 <br/>
              Exp: 01/20 CVV:123

          </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal
 });

export default connect(mapStateToProps)(CheckoutPage);