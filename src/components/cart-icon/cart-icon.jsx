import React  from 'react';
import{connect} from 'react-redux'
import{createStructuredSelector} from'reselect'
import {CartContainer, ShoppingIcon,ItemCountContainer} from'./cart-icon.style'
import {selectCartItemCount} from'../../redux/cart/cart.selector'
import {toggleCartHidden} from'../../redux/cart/cart.action'


const CartIcon =({toggleCartHidden ,countItem})=>(
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer className='item-count'> {countItem}</ItemCountContainer>
    </CartContainer>
)
const mapStateToProps=createStructuredSelector({
   countItem:selectCartItemCount
})

const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
})

export default connect( mapStateToProps,mapDispatchToProps)(CartIcon);