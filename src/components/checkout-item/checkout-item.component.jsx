import React from 'react';

import'./checkout-item.style.scss'

import{ clearItemFromCart , addItem ,removeItem} from'../../redux/cart/cart.action'

import {connect} from 'react-redux'

const CheckoutItem =({cartItems ,clearItem, removeItem ,addItemQuantity})=>{
    const {name, price ,imageUrl,quantity,id} =cartItems;
    console.log( 'clearItems', id , clearItem)
    return(

    <div className='checkout-item'>
        <div className='image-container' >
            <img className=' img' src={imageUrl} alt={name}/>
        </div>
        <span className='name'> {name}</span>
        <span className='quantity'>
            <div className='arrow'  onClick={()=>removeItem(cartItems)}>&#10094;</div>
            <span className='value'> {quantity}</span> 
             <div className='arrow' onClick={()=>addItemQuantity(cartItems)}>&#10095;</div>
                 </span>
        <span className='price'> ${price}</span>
        <div onClick={()=>{clearItem(cartItems)}}className='remove-button'> &#10005;</div>
    </div>
)}
// const mapStateToProps=createStructuredSelector({
//     clearItem:clearItemFromCart
// })

const mapDispatchToProps=dispatch=>({
    clearItem:item=>dispatch(clearItemFromCart(item)),
    addItemQuantity:item=>dispatch(addItem(item)),
    removeItem:item=>dispatch(removeItem(item))


})
export default connect(null,mapDispatchToProps) (CheckoutItem);