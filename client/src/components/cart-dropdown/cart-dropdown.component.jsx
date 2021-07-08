import React from'react';

import{connect} from 'react-redux'

import{toggleCartHidden} from'../../redux/cart/cart.action'

import{withRouter} from 'react-router-dom'

import{selectCartItems} from'../../redux/cart/cart.selector'

import {CartDropdownContainer, CartDropdownButton,EmptyMessageContainer ,CartItemsContainer} from './cart-dropdown.style'

import CartItem from'../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';


const CratDropdown =({cartItems , history , dispatch})=> (
    <CartDropdownContainer>
        <CartItemsContainer>{cartItems.length ?
         cartItems.map( (cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>
         ):<EmptyMessageContainer> Your Cart Is Empty</EmptyMessageContainer>
        }</CartItemsContainer>
       <CartDropdownButton onClick={()=>{history.push('/checkout');
         dispatch(toggleCartHidden());
        }}>Go To CheckOut</CartDropdownButton>
    </CartDropdownContainer>
)
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default withRouter(connect( mapStateToProps)(CratDropdown));