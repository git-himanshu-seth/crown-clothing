import React from "react";

import {connect} from'react-redux'

import './collection-item.style.scss'

import{addItem} from'../../redux/cart/cart.action'

import CustomButton from'../custom-button/custom-button.component'
const CollectionItem =({item, addItem})=>{
    const{id ,name,imageUrl ,price,}=item;
    return(
    <div className='collection-item' key={id}>
        <div style={{backgroundImage:`url(${imageUrl})`}}
        className="image"/>
<div className='collection-footer'>
    <span className='name'>{name} </span>
    <span className='price'>${price}</span>
</div>
<CustomButton inverted onClick={()=>addItem(item)}> ADD TO CARt</CustomButton>
    </div>
)}

const mapDispatchToProps=dispatch=>({
    addItem:item=>(dispatch(addItem(item)))
})
export default connect(null,mapDispatchToProps) (CollectionItem);