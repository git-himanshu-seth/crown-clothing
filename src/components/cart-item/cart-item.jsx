import React from 'react'

import {CartItemContainer,ItemDetailsContainer,CartItemImage} from './cart-item.style'

const CartItem=({item:{ name, price,quantity, imageUrl}})=>(
    <CartItemContainer>
            <CartItemImage src={imageUrl} alt='item' />
         <ItemDetailsContainer>
                <span > {name}</span>
            <span >{quantity} X $ {price}</span>
            </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;