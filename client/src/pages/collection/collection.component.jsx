import React ,{useEffect} from 'react';

import {connect} from'react-redux'

import {selectCollection} from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item.component'
import {firestore} from'../../firebase/firebase.utli'
import'./collection.style.scss';



const CollectionPage=({collection , match})=>{
  
    useEffect(
        ()=>{
            console.log('i am subscribing');
          const unsubscribeFromCollection=  firestore.collection('collections').onSnapshot(Snapshot=>{console.log(Snapshot)})
            return()=>{
                console.log('I am unsubscribe')
                unsubscribeFromCollection()
            }
        },[]
    )
    const {title,items} = collection;

    console.log('collection.match',collection);
return    (
<div className='collection-page'>
 
<h1 className ='title'>{title}</h1>
<div className='items'>
{
    items.map(item=><CollectionItem key={item.id} item={item}/>)
}
</div>
</div>

)}

const mapStateToProps=(state, ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps) (CollectionPage);