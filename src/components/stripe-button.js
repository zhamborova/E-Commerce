import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import '../assets/favicon.ico'


const StripeCheckoutButton =({price}) => {
   const cents = price * 100;
   const publishableKey ='pk_test_YRQjUkdp839SIRno33KKzms000Kt8kmEOJ';

   const onToken = token =>
   {console.log(token);
    alert('Payment Successful!')};


   return (<StripeCheckout
       stripeKey={publishableKey}
       amount={cents}
       label='Pay now'
       name='Crown Clothing'
       billingAddress
       shippingAddress
       image={'https://svgshare.com/i/CUz.svg'}
       description={`Your total is $${price}`}
       panelLabel='Pay now'
       token={onToken}
   />)
};

export default StripeCheckoutButton;