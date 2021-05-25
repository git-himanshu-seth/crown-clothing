import React from 'react';

import{connect} from 'react-redux'

import CollectionItem from'../../components/collection-item/collection-item.component';
import{addItem} from'../../redux/cart/cart.action'
import './collection-preview.style.scss';


const CollectionPreview=({title , items})=>(
    (<div className='collection-preview'>
<h1 className='title'> {title.toUpperCase()}</h1>
<div className='preview'>
{items.filter((item, idx)=>idx<4).map((item)=>(
    <CollectionItem key={item.id} item={item}/> ))}

</div>
    </div>
))

const mapDispatchToProps=(dispatch)=>({
addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionPreview);