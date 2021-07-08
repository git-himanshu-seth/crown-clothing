import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IxVYuSHEbdMtQox2wPLTb6T7T3qSvqLb9Z4O7aNTnHYQoBFeHyXGgYP4xnbgjrDZV0N7OEpvE76lRGfwLiN1Dp700qDz1IMU1';
    const onToken = async (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment SuccessFul');
            // console.log('payment successful')
        }
        ).catch(error => {
            // console.log('Payment Error', JSON.parse(error))
            alert('There was an issue with your Payment. ')
        })
    }
    return (
        <StripeCheckout
            lable='Pay Now'
            name='Crown clothing Ltd.'
            // billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;