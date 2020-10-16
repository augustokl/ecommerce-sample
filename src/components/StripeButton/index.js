import React, { useMemo, useCallback } from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = useMemo(() => price * 100, [price]);
  const publishableKey =
    'pk_test_51HchhyIeet0xvtzT6BQlQQi9oMSuBqkEfUC9YsFeYeHgeAKfWCsv76qU6ksHSZRaCLIiqzDScLM3sBU5OLzfb61D0052ua2bYv';

  const onToken = useCallback(token => {
    console.log(token);
    alert('Payment Successful');
  }, []);

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
