import React from "react";

import {connect} from'react-redux'

import{CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer} from './collection-item.style' 

import{addItem} from'../../redux/cart/cart.action'

const CollectionItem =({item, addItem})=>{
    const{id ,name,imageUrl ,price,}=item;
    console.log('items',item);
    return(
    <CollectionItemContainer key={id}>
        <BackgroundImage className='image' imageUrl={imageUrl}/>
<CollectionFooterContainer>
    <NameContainer>{name} </NameContainer>
    <PriceContainer>${price}</PriceContainer>
</CollectionFooterContainer>
<AddButton inverted onClick={()=>addItem(item)}> ADD TO CARt</AddButton>
    </CollectionItemContainer>
)}

const mapDispatchToProps=dispatch=>({
    addItem:item=>(dispatch(addItem(item)))
})
export default connect(null,mapDispatchToProps) (CollectionItem);