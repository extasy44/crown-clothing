import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_dqhZt7o5tA0cfQlk5uchU3Dg00vSEJmCAU";

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        }).then(response => {
          alert('Payment Successful');
        }).catch(error => {
          console.log('Payment Error:', error);
          alert('There was an issue with your payment. Please sure you use the provided credit card!');
        });
    }
    
    return (
      <StripeCheckout
        label="Pay Now"
        name="Crown Clothing"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    );
};

export default StripeCheckoutButton;
