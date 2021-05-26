import React from'react';
import{connect} from 'react-redux'
import{selectCartItems} from'../../redux/cart/cart.reselect'
import CustomButton from'../custom-button/custom-button.component'
import'./cart-dropdown.style.scss'
import CartItem from'../cart-item/cart-item';
const CratDropdown =({cartItems})=>
    // console.log('cartitems',cartItems)
    (
    <div className='cart-dropdown'>
        <div className='cart-items'>{
         cartItems.map( (cartItem)=> <CartItem key={cartItem.id} item={cartItem}/>)
        }</div>
        <CustomButton>Go To CheckOut</CustomButton>
    </div>
)
const mapStateToProps=(state)=>({
    cartItems:selectCartItems(state)
})
export default connect( mapStateToProps)(CratDropdown);