import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceToCent = price * 100;
  const publishableKey = 'pk_test_2OaczKYrK8beqGwQrzQO66i0005irDLAys';

  const onToken = token => {
    axios.post('payment', { amount: priceToCent, token })
    .then(res => alert('payemnt successfull'))
    .catch(err => {
         console.log('payment error:'+ err)
         ; alert('error eccured during the payment')
    })
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceToCent}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
