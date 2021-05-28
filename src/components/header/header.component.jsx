import React from 'react';
import {Link } from 'react-router-dom';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crownicon/crown.svg';
import {auth} from '../../firebase/firebase.utli';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import{selectCurrentUser} from'../../redux/user/user.selector'
import CartIcon from'../cart-icon/cart-icon';
import CratDropdown from '../cart-dropdown/cart-dropdown.component';
const Header=({currentUser ,hidden})=>{
    // console.log('currecntUser',currentUser);
    return(
    <div className='header'>
<Link to='/' className='logo-container'>
<Logo className='logo'/>
</Link>
<div className='options'>
<Link className='option' to='./shop'> SHOP</Link>

<Link className='option' to='./about'> ABOUT</Link>
{
    currentUser? 
    <div className='option' onClick={ ()=>auth.signOut()}> SIGN OUT</div>
:(

<Link className="option" to='/sign'>
    SIGN IN
</Link>


)}
<CartIcon/>
</div>
{
    hidden? null:<CratDropdown/>
}

    </div>
)
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);