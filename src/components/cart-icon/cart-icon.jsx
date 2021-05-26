import React  from 'react';
import{connect} from 'react-redux'
import'./cart-icon.style.scss';
import {selectCartItemCount} from'../../redux/cart/cart.reselect'
import {toggleCartHidden} from'../../redux/cart/cart.action'
import{ReactComponent as ShoppingIcon } from'../../assets/crownicon/shopping-bag.svg'
// import CartItem from '../cart-item/cart-item';

const CartIcon =({toggleCartHidden ,countItem})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> {countItem}</span>
    </div>
)
const mapStateToProps=(state)=>({
   countItem:selectCartItemCount(state)
})

const mapDispatchToProps = dispatch=>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
})

export default connect( mapStateToProps,mapDispatchToProps)(CartIcon);