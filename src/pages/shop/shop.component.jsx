import React , {useEffect}from 'react';
import {Route} from 'react-router-dom'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'

import CollectionPageContainer from '../../pages/collection/collection-page.container'

import {connect} from 'react-redux'
import  {fetchCollectionsStart} from '../../redux/shop/shop.action'




const ShopComponent =({fetchCollectionsStart, match})=>{

 useEffect(()=>{
   fetchCollectionsStart()
 },[fetchCollectionsStart]);

   return(
            <div className='shop-page'>
              <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
              <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
      
            </div>
        )};       
        
       
  const mapDispatchToProps=dispatch=>({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())  
  })      
export default connect(null,mapDispatchToProps)(ShopComponent);