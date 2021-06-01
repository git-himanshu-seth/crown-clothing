import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton=({price})=>{
    const priceForStripe = price *100;
    const publishableKey ='pk_test_51IxVYuSHEbdMtQox2wPLTb6T7T3qSvqLb9Z4O7aNTnHYQoBFeHyXGgYP4xnbgjrDZV0N7OEpvE76lRGfwLiN1Dp700qDz1IMU1';
const onToken=token=>{
    console.log(token);
    alert('Payment Succesful')
}
    return(
        <StripeCheckout
        lable='Pay Now'
        name='Crown clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Youre Total Is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={ onToken }
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;