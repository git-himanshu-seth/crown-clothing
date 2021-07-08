import React from 'react';

import{connect} from 'react-redux'

import CollectionItem from'../../components/collection-item/collection-item.component';
import{addItem} from'../../redux/cart/cart.action'
import{CollectionPreviewContainer,TitleContainer,PreviewContainer} from './collection-preview.style'

const CollectionPreview=({title , items})=>(
    (<CollectionPreviewContainer>
<TitleContainer> {title.toUpperCase()}</TitleContainer>
<PreviewContainer>
{items.filter((item, idx)=>idx<4).map((item)=>(
    <CollectionItem key={item.id} item={item}/> ))}

</PreviewContainer>
    </CollectionPreviewContainer>
))

const mapDispatchToProps=(dispatch)=>({
addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionPreview);