import React from'react';

import{connect} from 'react-redux'

import{toggleCartHidden} from'../../redux/cart/cart.action'

import{withRouter} from 'react-router-dom'

import{selectCartItems} from'../../redux/cart/cart.selector'

import CustomButton from'../custom-button/custom-button.component'

import'./cart-dropdown.style.scss'

import CartItem from'../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';


const CratDropdown =({cartItems , history , dispatch})=>{
     console.log('history',history)
   return (
    <div className='cart-dropdown'>
        <div className='cart-items'>{cartItems.length ?
         cartItems.map( (cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>
         ):<span className='empty-message'> Your Cart Is Empty</span>
        }</div>
       <CustomButton onClick={()=>{history.push('/checkout');
   dispatch(toggleCartHidden());
   }}>Go To CheckOut</CustomButton>
    </div>
)}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect( mapStateToProps)(CratDropdown));