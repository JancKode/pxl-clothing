import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_9cumdbCFHmmoTPU4tDnFgnvk00wSSk0EIJ';

   const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
            amount={priceForStripe}
            description={`Your total is $${price}`}
            label="Pay Now"
            billingAddress
            shippingAddress
            image= 'https://sendeyo.com/up/d/f3eb2117da'
            panelLabel='Pay Now'
            token= {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;