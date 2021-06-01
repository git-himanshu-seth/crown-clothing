import React from 'react'
import  CheckoutItem from'../../components/checkout-item/checkout-item.component'
import { connect } from 'react-redux';
import {createStructuredSelector} from'reselect'

import StripeCheckoutButton from'../../components/stripe-button/stripe-button.component'

import './checkout.style.scss'
import {selectTotalCost ,selectCartItems} from'../../redux/cart/cart.selector'
const CheckOut=({total , cartItem})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>
Product
                </span>
            </div>

            <div className='header-block'>
                <span>
Description
                </span>
            </div>

            <div className='header-block'>
                <span>
Price
                </span>
            </div>

            <div className='header-block'>
                <span>
Remove
                </span>
            </div>
            
        </div>
       {cartItem.map((cart)=><CheckoutItem  key={cart.id}cartItems={cart}/>)}
        <div className='total'> 
<span>TOTAL:${total}</span>
</div>
<div className='test-warning'> *please use the following test credit card for payments* 
<br/> VISA, 4532864593931965, EXP DATE 10/2021, CVV126</div>
<StripeCheckoutButton price={total}/>
     </div>
)

const mapStateToProps=createStructuredSelector(
    {
total:selectTotalCost,
cartItem:selectCartItems
    }
)

export default  connect(mapStateToProps)(CheckOut);