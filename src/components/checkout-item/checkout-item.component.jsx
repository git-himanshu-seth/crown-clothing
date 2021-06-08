import React from 'react';

import {CheckoutItemContainer,ImageContainer,TextContainer,QuantityContainer,RemoveButtonContainer} from'./checkout-item.style'

import { clearItemFromCart , addItem ,removeItem} from'../../redux/cart/cart.action'

import {connect} from 'react-redux'

const CheckoutItem =({cartItems ,clearItem, removeItem ,addItemQuantity})=>{
    const {name, price ,imageUrl,quantity} =cartItems;
    return(

    <CheckoutItemContainer>
        <ImageContainer >
            <img className=' img' src={imageUrl} alt={name}/>
        </ImageContainer>
        <TextContainer> {name}</TextContainer>
        <QuantityContainer>
            <div   onClick={()=>removeItem(cartItems)}>&#10094;</div>
            <span > {quantity}</span> 
             <div  onClick={()=>addItemQuantity(cartItems)}>&#10095;</div>
                 </QuantityContainer>
        <TextContainer> ${price}</TextContainer>
        <RemoveButtonContainer onClick={()=>{clearItem(cartItems)}}className='remove-button'> &#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
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