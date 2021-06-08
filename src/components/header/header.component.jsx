import React from 'react';

import {ReactComponent as Logo} from '../../assets/crownicon/crown.svg';

import {auth} from '../../firebase/firebase.utli';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect'

import {selectCartHidden} from '../../redux/cart/cart.selector'

import{selectCurrentUser} from'../../redux/user/user.selector'

import CartIcon from'../cart-icon/cart-icon';

import CratDropdown from '../cart-dropdown/cart-dropdown.component';

import{HeaderContainer,LogoContainer,OptionsContainor,OptionLink} from'./header.style'

const Header=({currentUser ,hidden})=>(
    <HeaderContainer>
<LogoContainer to='/' >
<Logo className='logo'/>
</LogoContainer>
<OptionsContainor>
<OptionLink to='/shop'> SHOP</OptionLink>

<OptionLink to='/about'> ABOUT</OptionLink>
{
    currentUser? 
    <OptionLink as='div' onClick={ ()=>auth.signOut()}> SIGN OUT</OptionLink>
:(

<OptionLink to='/sign'>
    SIGN IN
</OptionLink>


)}
<CartIcon/>
</OptionsContainor>
{
    hidden? null:<CratDropdown/>
}

    </HeaderContainer>
)

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);